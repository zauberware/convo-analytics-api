import JSONApiRequest from './JSONApiRequest';

class QueryRequest extends JSONApiRequest {
  constructor(application, message, options) {
    super(application, options);

    this.language = application.language;

    if ('requestSource' in application) {
      this.requestSource = application.requestSource;
    }

    // Check for options
    if ('timezone' in options) {
      this.timezone = options.timezone;
    }

    // Check for message date
    if ('sessionId' in message) {
      this.sessionId = message.sessionId;
    } else {
      throw Error('Now "sessionId" is required parameter. Please add this parameter to "options" of request.');
    }

    if ('messageId' in message) {
      this.messageId = message.messageId;
    } else {
      throw Error('Now "messageId" is required parameter. Please add this parameter to "options" of request.');
    }

    if ('sentTimestamp' in message) {
      this.sentTimestamp = message.sentTimestamp;
    } else {
      throw Error('Now "sentTimestamp" is required parameter. Please add this parameter to "options" of request.');
    }

    if ('type' in message) {
      this.type = message.type;
    }

    if ('text' in message) {
      this.text = message.text;
    }

    if ('user' in message) {
      this.user = message.user;
    }

    if ('channel' in message) {
      this.channel = message.channel;
    }

    if ('originalRequest' in message) {
      this.originalRequest = message.originalRequest;
    }
  }

  requestOptions() {
    let requestOptions = {};

    requestOptions = super.requestOptions();

    requestOptions.path = this.endpoint;
    requestOptions.method = 'POST';

    return requestOptions;
  }

  jsonRequestParameters() {
    const json = {
      timezone: this.timezone,
      language: this.language,
      sessionId: this.sessionId,
      messageId: this.messageId,
      sentTimestamp: this.sentTimestamp,
    };

    if ('type' in this) {
      json.type = this.type;
    }

    if ('text' in this) {
      json.text = this.text;
    }

    if ('user' in this) {
      json.user = this.user;
    }

    if ('channel' in this) {
      json.channel = this.channel;
    }

    if ('originalRequest' in this) {
      json.originalRequest = this.originalRequest;
    }

    return json;
  }
}

export default QueryRequest;
