var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: 'foo',
    secretAccessKey: 'bar'
});

var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

var deleteObject = {
    TableName: "myTable",
    Key:{
        "primaryKey": 2,
    }
}

docClient.delete(deleteObject, function(err, data) {
   console.log(data)
});
