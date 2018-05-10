import ApiRequest from './apiRequest';

class JSONApiRequest extends ApiRequest {
  handleResponse(response) {
    const statusOk = 200;
    const statusOkEnd = 399;
    const self = this;
    let body = '';
    let buffers = [];
    let bufferLength = 0;

    response.on('data', (chunk) => {
      bufferLength += chunk.length;
      buffers.push(chunk);
    });

    response.on('end', () => {
      if (bufferLength) {
        body = Buffer.concat(buffers, bufferLength).toString('utf8');
      }

      buffers = [];
      bufferLength = 0;

      if (response.statusCode >= statusOk && response.statusCode <= statusOkEnd) {
        try {
          self.emit('response', JSON.parse(body));
        } catch (error) {
          //  JSON.parse can throw only one exception, SyntaxError
          // All another exceptions throwing from user function,
          // because it just rethrowing for better error handling.
          if (error instanceof SyntaxError) {
            self.emit('error', error);
          } else {
            throw error;
          }
        }
      } else {
        // var error = new ServerError(response.statusCode, body, 'Wrong response status code.');
        self.emit('error', 'Wrong response status code.');
      }
    });
  }
}

export default JSONApiRequest;
