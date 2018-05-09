var EventEmitter = require('events').EventEmitter;
// var util = require('util');
var https = require('https');

class ApiRequest extends EventEmitter {
  constructor (application, options) {
    super();
    var self = this;

    self.clientAccessToken = application.clientAccessToken;

    self.hostname = application.hostname;

    self.endpoint = options.endpoint;
    self.requestSource = application.requestSource;

    var requestOptions = self._requestOptions();

    requestOptions.agent = application._agent;

    console.log(requestOptions);
    var request = https.request(requestOptions, function (response) {
      self._handleResponse(response);
    });

    request.on('error', function (error) {
      self.emit('error', error);
    });

    self.request = request;
  }

  _handleResponse (response) {
    throw new Error('Cant call abstract method!');
  }

  _headers () {
    var self = this;

    return {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + self.clientAccessToken,
      'api-request-source': self.requestSource,
    };
  }

  _requestOptions () {
    var self = this;

    return {
      hostname: self.hostname,
      headers: self._headers(),
    };
  }

  write (chunk) {
    this.request.write(chunk);
  }

  end () {
    this.request.end();
  }
}

export default ApiRequest;
