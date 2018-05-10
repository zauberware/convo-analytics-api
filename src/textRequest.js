import QueryRequest from './queryRequest';

class TextRequest extends QueryRequest {
  constructor(application, message, options) {
    super(application, message, options);
    
    if ('text' in message) {
      this.text = message.text;
    }

    this.doRequest();
  }

  headers() {
    const headers = super.headers();
    headers['Content-Type'] = 'application/json; charset=utf-8';
    return headers;
  }

  jsonRequestParameters() {
    const json = super.jsonRequestParameters();
    
    if ('text' in this) {
      json.text = this.text;
    }
    
    return json;
  }

  end() {
    this.write(JSON.stringify(this.jsonRequestParameters()));
    super.end();
  }
}

export default TextRequest;
