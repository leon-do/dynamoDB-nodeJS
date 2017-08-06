var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: 'foo',
    secretAccessKey: 'bar'
});

var dynamodb = new AWS.DynamoDB()

var deleteTable = {
    TableName: "myTable",
}

dynamodb.deleteTable(deleteTable, function(err, data) {
   console.log(data)
});
