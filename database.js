const mysql = require('mysql');

const connection = mysql.createConnection({
	host : '192.168.254.135',
	database : 'pagelogin',
	user : 'root',
	password : 'Khoi@8888'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;