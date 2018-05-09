import QueryRequest from './queryRequest';

// var util = require('util');

class TextRequest extends QueryRequest {
  constructor (application, message, options) {
    super(application, message, options);
    this.doRequest();
  }

  _headers () {
    var headers = super._headers();
    headers['Content-Type'] = 'application/json; charset=utf-8';
    return headers;
  }

  _jsonRequestParameters () {
    var json = super._jsonRequestParameters();
    json.messageType = 'TextRequest';
    console.log('params');
    console.log(json);
    return json;
  }

  end () {
    this.write(JSON.stringify(this._jsonRequestParameters()));
    super.end();
  }
}

export default TextRequest;
