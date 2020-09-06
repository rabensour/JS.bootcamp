var express = require('express');
var path = require('path');
var app = express();

// GET request
// The app responds with "Hello World!"" for requests to the root URL (/) or route. 
app.get('/', function(req, res) {
	res.sendFile('index.html', {root: path.join(_dirname, './files')})
});

app.listen(3000, function() {
	console.log('listening at port 3000');
});

// Commande Prompt
// cd (Path to the file)
// node app.js ('listening at port 3000')
// localhost:3000 Output (This is an HTML tag)