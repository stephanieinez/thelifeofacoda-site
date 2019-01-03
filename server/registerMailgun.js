const mailgun = require('mailgun.js');

const mailgunClient = mailgun.client({
  username: 'api',
  key: process.env.REACT_APP_MAILGUN_API_KEY
});

module.exports = mailgunClient;
