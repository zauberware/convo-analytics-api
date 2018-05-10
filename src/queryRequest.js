import JSONApiRequest from './JSONApiRequest';

class QueryRequest extends JSONApiRequest {
  constructor(application, message, options) {
    super(application, options);

    // try to set lang from app
    this.language = application.language;

    // required fields
    if ('user_id' in message) {
      this.user_id = message.user_id;
    } else {
      throw Error('Now "user_id" is required parameter. Please add this parameter to "options" of request.');
    }

    if ('type' in message && (message.type === 'user' || message.type === 'agent')) {
      this.type = message.type;
    } else {
      throw Error('Now "type" is required parameter and has to be "user" or "agent". Please add this parameter to "options" of request.');
    }

    if ('time_stamp' in message) {
      this.time_stamp = message.time_stamp;
    } else {
      throw Error('Now "time_stamp" is required parameter. Please add this parameter to "options" of request.');
    }

    if ('platform' in message) {
      this.platform = message.platform;
    } else {
      throw Error('Now "platform" is required parameter. Please add this parameter to "options" of request.');
    }

    // optional fields
    if ('session_id' in message) {
      this.session_id = message.session_id;
    }

    if ('timezone' in message) {
      this.timezone = message.timezone;
    }

    if ('language' in message) {
      this.language = message.language;
    }

    if ('intent' in message) {
      this.intent = message.intent;
    }

    if ('version' in message) {
      this.version = message.version;
    }

    if ('handled' in message) {
      this.handled = message.handled;
    }

    if ('original_request' in message) {
      this.original_request = message.original_request;
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
      user_id: this.user_id,
      type: this.type,
      time_stamp: this.time_stamp,
      platform: this.platform,
    };

    if ('session_id' in this) {
      json.session_id = this.session_id;
    }

    if ('timezone' in this) {
      json.timezone = this.timezone;
    }

    if ('language' in this) {
      json.language = this.language;
    }

    if ('intent' in this) {
      json.intent = this.intent;
    }

    if ('version' in this) {
      json.version = this.version;
    }

    if ('handled' in this) {
      json.handled = this.handled;
    }

    if ('originalRequest' in this) {
      json.originalRequest = this.originalRequest;
    }

    return json;
  }
}

export default QueryRequest;
