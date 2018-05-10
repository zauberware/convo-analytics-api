import TextRequest from './textRequest';

const https = require('https');
/**
 * Module variables.
 * @private
 */

const version = '20180509';
const language = 'en';
const hostname = '8a0budp823.execute-api.eu-central-1.amazonaws.com';
const endpoint = '/latest/messages/';

class ConvoAnalyticsApi {
  constructor(clientAccessToken, options) {
    this.language = options.language || language;
    this.clientAccessToken = clientAccessToken;
    this.hostname = options.hostname || hostname;
    this.version = options.version || version;
    this.endpoint = options.endpoint || endpoint;

    this.agent = new https.Agent({ keepAlive: true });
  }

  textRequest(message, options) {
    const opt = options || {};

    if (!('endpoint' in opt)) {
      opt.endpoint = this.endpoint;
    }

    if (!('version' in opt)) {
      opt.version = this.version;
    }
    return new TextRequest(this, message, opt);
  }
}

export default ConvoAnalyticsApi;
