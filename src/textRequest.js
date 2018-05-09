import QueryRequest from './queryRequest';

// var util = require('util');

class TextRequest extends QueryRequest {
  constructor (application, query, options) {
    super(application, options);
    this.query = query;

    this.doRequest();
  }

  _headers () {
    var headers = super._headers();
    headers['Content-Type'] = 'application/json; charset=utf-8';
    return headers;
  }

  _jsonRequestParameters () {
    var json = super._jsonRequestParameters();
    json.queryResult = this.query;
    return json;
  }

  end () {
    this.write(JSON.stringify(this._jsonRequestParameters()));
    super.end();
  }
}

export default TextRequest;
