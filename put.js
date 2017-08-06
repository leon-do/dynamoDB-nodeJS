var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: 'foo',
    secretAccessKey: 'bar'
});

var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

var putObject = {
    TableName: "myTable",
    Item: {
        "primaryKey" : 2,
        "info":  [11,22,33,44]
    }
}

docClient.put(putObject, function(err, data) {
   console.log(data)
});
