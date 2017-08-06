# set up locally

- download :http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html
- cd to download
- `java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb`
- `npm install dynamodb-admin -g` (install dynamodb gui)
- `export AWS_ACCESS_KEY_ID=mykey && export AWS_SECRET_ACCESS_KEY=mysecret && export DYNAMO_ENDPOINT=http://localhost:8000 && dynamodb-admin`
