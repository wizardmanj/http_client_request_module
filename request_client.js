var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')      // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
        console.log('Downloading image...');
        console.log('Response Status Code: ', response.statusCode);
        console.log('Response Status Message: ', response.statusMessage);
        console.log('Responsse Headers: ', response.headers['content-type']);
       })
       .on('end', function() {
        console.log('Download complete.')})
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4
       
       