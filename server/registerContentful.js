const contentful = require('contentful');

const contentfulClient = contentful.createClient({
  space: process.env.LOG_CONTENTFUL_SPACE,
  accessToken: process.env.LOG_CONTENTFUL_ACCESS_TOKEN
});

module.exports = contentfulClient;
