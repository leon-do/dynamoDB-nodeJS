var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: 'foo',
    secretAccessKey: 'bar'
});

var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

var getObject = {
    TableName: "myTable",
    Key:{
        "primaryKey": 1,
    }
}

docClient.get(getObject, function(err, data) {
   console.log(data)
});
