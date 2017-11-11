var express = require('express');
var app = express();

app.use(express.static('apidoc'));

app.get('/', function (req, res) {
	res.render('apidoc/index.html');
});

app.listen(3000);
console.log('api doc start !!');
