import ApiRequest from './apiRequest';

// var util = require('util');

// var ServerError = require('./exceptions').ServerError;

class JSONApiRequest extends ApiRequest {
  _handleResponse (response) {
    // var self = this;

    var body = '';

    var buffers = [];
    var bufferLength = 0;

    response.on('data', function (chunk) {
      bufferLength += chunk.length;
      buffers.push(chunk);
    });

    response.on('end', function () {
      if (bufferLength) {
        body = Buffer.concat(buffers, bufferLength).toString('utf8');
      }

      buffers = [];
      bufferLength = 0;
      var statusOk = 200;
      var statusOkEnd = 200;

      if (response.statusCode >= statusOk && response.statusCode <= statusOkEnd) {
        try {
          console.log(JSON.parse(body));
          // var json_body = JSON.parse(body);
          // console.log(body);
          // self.emit('response', json_body);
        } catch (error) {
          //  JSON.parse can throw only one exception, SyntaxError
          // All another exceptions throwing from user function,
          // because it just rethrowing for better error handling.

          if (error instanceof SyntaxError) {
            // self.emit('error', error);
            console.log(error);
          } else {
            throw error;
          }
        }
      } else {
        console.log(response.statusCode);
        console.log('Wrong response status code.');
        // var error = new ServerError(response.statusCode, body, 'Wrong response status code.');
        // self.emit('error', error);
      }
    });
  }
}

export default JSONApiRequest;
