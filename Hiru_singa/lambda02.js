let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.scan({
		TableName: 'HiruTable',
		ExpressionAttributeValues: {
			':name': 'Hiru'
		},
		FilterExpression: '#name01 = :name',
		ExpressionAttributeNames: {
     		"#name01": "Name"
		}
	}, function (err, data) {
		if (err) {
			//handle error
			console.log('error : ', err);
			callback(null, err);
		} else {
			//your logic goes here
			console.log('data : ', data);
			callback(null, data);
		}
	});



	//callback(null, 'Successfully executed');
}