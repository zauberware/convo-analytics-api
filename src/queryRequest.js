import JSONApiRequest from './JSONApiRequest';
// var util = require('util');

class QueryRequest extends JSONApiRequest {
  constructor (application, options) {
    super(application, options);

    this.language = application.language;

    // if ('timezone' in options) {
    //   this.timezone = options.timezone;
    // }

    if ('resetContexts' in options) {
      this.resetContexts = options.resetContexts;
    }

    if ('contexts' in options) {
      this.contexts = options.contexts;
    }

    if ('entities' in options) {
      this.entities = options.entities;
    }

    if ('sessionId' in options) {
      this.sessionId = options.sessionId;
    } else {
      throw Error(
        'Now \'sessionId\' is required parameter. Please add this parameter to \'options\' of request.'
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
    var path = 'query';

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
      // 'timezone': this.timezone,
      'lang': this.language,
    };

    if ('resetContexts' in this) {
      json.resetContexts = this.resetContexts;
    }

    if ('contexts' in this) {
      json.contexts = this.contexts;
    }

    if ('entities' in this) {
      json.entities = this.entities;
    }

    if ('sessionId' in this) {
      json.sessionId = this.sessionId;
    }

    if ('originalRequest' in this) {
      json.originalRequest = this.originalRequest;
    }

    return json;
  }
}

export default QueryRequest;
