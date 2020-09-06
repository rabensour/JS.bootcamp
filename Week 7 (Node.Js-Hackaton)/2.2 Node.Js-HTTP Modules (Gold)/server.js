const http = require('http'); 
const server = http.createServer((req, res) => {  
    //check the URL of the current request
    //check if the request URL is equal to /welcome.
    if (req.url == '/') { 
        // inform the client that we send JSON response in the          header with the appropriate content type.
        res.writeHead(200, 
                      { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(
            { "firtsname":"John", "lastname":"Doe"}));  
        res.end();  
    } else {
         res.end("Another page");  
    }
});
server.listen(8080);
console.log('Node.js web server at port 8080 is running..')

// Command Prompt :
// cd (path to the file)
// node server.js ('Node.js web server at port 8080 is running..')
// Output : {"firtsname":"John","lastname":"Doe"}