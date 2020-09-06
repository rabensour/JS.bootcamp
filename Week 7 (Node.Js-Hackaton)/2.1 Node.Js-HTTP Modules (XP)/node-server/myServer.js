var http = require('http'); 
var fs = require('fs');
var html = fs.readFileSync('text.html', 'UTF-8');

function send404Response(response){
	response.writeHead(404, {'Content-Type' : 'text/plain'});
	response.write('Error 404 : Page not found!')
	response.end();
}

function onRequest (request, response) {
	if (request.method == 'GET' && request.url == '/') {
		response.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream('./text.html').pipe(response);
	} else {
		send404Response(response);
	}
}

http.createServer(onRequest).listen(3000);
console.log('Server is now running on port 3000');