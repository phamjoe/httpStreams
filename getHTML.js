function getHTML (options, callback) {

  /* Add your code here */
  var https = require('https');
  var chunk = '';
  https.get(options, function(response) {
    // set encodings of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function(data) {
      chunk += data;
      printHTML(chunk);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);