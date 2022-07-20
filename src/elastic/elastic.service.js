const elasticsearch = require('elasticsearch');

const elasticService = elasticsearch.Client({
    host: process.env.ELASTIC_HOST,
});

module.exports = elasticService;
