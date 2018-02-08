let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.put({
		TableName: 'HiruTable',
		Item: { 'ID': '002', 'Name': 'Hiru' }
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
			callback(null, err);
		} else {
			//your logic goes here
			console.log('data : ', data);
			callback(null, 'Successfully executed');
		}
	});

	//callback(null, 'Successfully executed');
}