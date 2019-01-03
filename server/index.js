const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const cors = require('cors');
const bodyParser = require('body-parser');
const mailgunClient = require('./registerMailgun');
const contentfulClient = require('./registerContentful');

const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `Node cluster worker ${
        worker.process.pid
      } exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();
  app.use(cors());
  //support parsing of application/json type post data
  app.use(bodyParser.json());

  //support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.post('/api/email', function(req, res) {
    const emailTemplate = `From: ${req.body.email}\n
    Message: ${req.body.message}`;
    const mailgunServer = process.env.LOG_MAILGUN_SERVER;
    mailgunClient.messages
      .create(mailgunServer, {
        from: `Laura O'Grady <mailgun@${mailgunServer}>`,
        to: ['annie.inez@gmail.com'],
        subject: `New message via your website from: ${req.body.email}`,
        text: emailTemplate
      })
      .then(() => {
        res.set('Content-Type', 'application/json');
        res.send('{"message":"Sent!"}');
      }) // logs response data
      .catch(err => {
        res.status(err.status || 500);
        res.send({
          message: err.message,
          error: err
        });
        console.log(err);
      }); // logs any error
  });

  app.get('/api/blog', function(req, res) {
    const apiResult = {
      blogPosts: []
    };
    contentfulClient
      .getEntries({
        order: '-sys.createdAt',
        limit: 10,
        skip: 0
      })
      .then(entries => {
        entries.items.forEach(entry => {
          if (entry) {
            if (entry.sys.contentType.sys.id === 'blogPost') {
              apiResult.blogPosts.push(entry.fields);
            }
          }
        });
        res.send(apiResult);
      })
      .catch(err => {
        res.status(err.status || 500);
        res.send({
          message: err.message,
          error: err
        });
        console.log(err);
      });
  });

  const getContentByType = content_type =>
    contentfulClient.getEntries({ content_type });

  app.get('/api/content', function(req, res) {
    const contentTypes = ['about', 'contact', 'home'];
    Promise.all(contentTypes.map(getContentByType))
      .then(result => {
        return result.reduce((accum, item) => {
          if (item) {
            item.items.forEach(entry => {
              if (entry) {
                accum[entry.sys.contentType.sys.id] = entry.fields;
              }
            });
          }
          return accum;
        }, {});
      })
      .then(apiResult => res.send(apiResult))
      .catch(err => {
        console.error(err);
        res.status(err.status || 500);
        res.send({
          message: err.message,
          error: err
        });
      });
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(
      path.resolve(__dirname, '../react-ui/build', 'index.html')
    );
  });

  app.listen(PORT, function() {
    console.error(
      `Node cluster worker ${process.pid}: listening on port ${PORT}`
    );
  });
}
