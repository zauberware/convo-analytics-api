import JSONApiRequest from './JSONApiRequest';
// var util = require('util');

class QueryRequest extends JSONApiRequest {
  constructor (application, options) {
    super(application, options);

    this.language = application.language;

    if ('timezone' in options) {
      this.timezone = options.timezone;
    }

    if ('sessionId' in options) {
      this.sessionId = options.sessionId;
    } else {
      throw Error(
        'Now \'sessionId\' is required parameter. Please add this parameter to \'options\' of request.'
      );
    }

    if ('messageId' in options) {
      this.messageId = options.messageId;
    } else {
      throw Error(
        'Now \'messageId\' is required parameter. Please add this parameter to \'options\' of request.'
      );
    }

    if ('version' in options) {
      this.version = options.version;
    }

    if ('requestSource' in application) {
      this.requestSource = application.requestSource;
    }

    if ('originalRequest' in options) {
      this.originalRequest = options.originalRequest;
    }
  }

  _requestOptions () {
    var path = '';

    if (this.hasOwnProperty('version')) {
      path += '?v=' + this.version;
    }

    var request_options = super._requestOptions();

    request_options.path = this.endpoint + path;
    request_options.method = 'POST';

    return request_options;
  }

  _jsonRequestParameters () {
    var json = {
      'timezone': this.timezone,
      'language': this.language
    };

    if ('sessionId' in this) {
      json.session = this.sessionId;
    }

    if ('messageId' in this) {
      json.messageId = this.messageId;
    }

    if ('originalRequest' in this) {
      json.originalRequest = this.originalRequest;
    }

    return json;
  }
}

export default QueryRequest;
