var exports = module.exports;
var aws = require('aws-sdk');
var s3 = new aws.S3();

var noop = require('./lib/noop.js');

exports.handler = function(event, context) {
  noop.run();

  s3.listBuckets(function(err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
      context.done(err);
    } else {
      console.log(data); // successful response
      context.done();
    }
  });
};
