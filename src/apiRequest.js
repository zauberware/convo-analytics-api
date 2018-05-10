/* eslint-disable class-methods-use-this */
const EventEmitter = require('events').EventEmitter;
const https = require('https');

class ApiRequest extends EventEmitter {
  constructor(application, options) {
    super();

    this.clientAccessToken = application.clientAccessToken;
    this.hostname = application.hostname;
    this.endpoint = options.endpoint;
    this.agent = application.agent;
  }

  doRequest() {
    let request = null;
    const self = this;
    const requestOptions = self.requestOptions();

    requestOptions.agent = self.agent;

    request = https.request(requestOptions, (response) => {
      self.handleResponse(response);
    });

    request.on('error', (error) => {
      self.emit('error', error);
    });

    self.request = request;
  }

  handleResponse() {
    throw new Error('Cant call abstract method!');
  }

  headers() {
    const bearer = this.clientAccessToken;

    return {
      Accept: 'application/json',
      'x-api-key': bearer
    };
  }

  requestOptions() {
    return {
      hostname: this.hostname,
      headers: this.headers(),
    };
  }

  write(chunk) {
    this.request.write(chunk);
  }

  end() {
    this.request.end();
  }
}

export default ApiRequest;
