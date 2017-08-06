var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: 'foo',
    secretAccessKey: 'bar'
});

var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

var updateObject = {
    TableName: "myTable",
    Key:{
        "primaryKey": 1,
    },
    UpdateExpression: "set info = :updateInfo",  // need the colon
    ExpressionAttributeValues:{
    ":updateInfo": 'info is updated',   // this is what's updated
    },
    ReturnValues:"UPDATED_NEW"
}

docClient.update(updateObject, function(err, data) {
   console.log(data)
});
