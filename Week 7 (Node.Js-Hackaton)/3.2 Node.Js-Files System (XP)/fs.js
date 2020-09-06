var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Some Data For example', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.readFile('mynewfile.txt', 'utf-8', function (err, data) {
	console.log(data); 
});