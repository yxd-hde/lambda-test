# lambda-test
test project to use AWS Lambda

## Installation

Make sure you have

* nodejs
* npm
* gulp

installed on your machine.

## Prepare to use AWS service.

The sample code calls AWS S3's list bucket API.
So you should at least have AWS credentials set.

See http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html

## Run AWS Lambda function on local machine for debugging.

In the project top directory, run

``` bash
gulp lambda -e ${EVENT_JSON_FILE}
```

## Create AWS Lambda source zip package.

In the project top directory, run

```
gulp package
```

It will create a `dist.zip` for you to upload to AWS Lambda function.

To clean up the package created, run

```
gulp clean
```
