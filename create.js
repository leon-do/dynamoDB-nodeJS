// https://github.com/aaronshaf/dynamodb-admin
// http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-keyschema.html
'use strict'

const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId: 'foo',
  secretAccessKey: 'bar'
});

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "myTable",
    KeySchema: [
        { AttributeName: "primaryKey", KeyType: "HASH"},  // All Dynamo DB tables must have exactly one hash key
    ],
    AttributeDefinitions: [
        { AttributeName: "primaryKey", AttributeType: "N" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
