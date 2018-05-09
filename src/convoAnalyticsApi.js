import TextRequest from './textRequest';
var https = require('https');

/**
 * Module variables.
 * @private
 */

var version = '20180509';
var language = 'en';
var hostname = 'ocjdjdwcvl.execute-api.eu-central-1.amazonaws.com';
var endpoint = '/latest/message';
var defaultSource = 'node';

class ConvoAnalyticsApi {
  constructor (clientAccessToken, options) {
    this.language = options.language || language;
    this.clientAccessToken = clientAccessToken;
    this.hostname = options.hostname || hostname;
    this.version = options.version || version;
    this.endpoint = options.endpoint || endpoint;
    this.requestSource = options.requestSource || defaultSource;

    this._agent = new https.Agent({ keepAlive: true });
  }

  textRequest (query, options) {
    var self = this;
    var opt = options || {};

    if (!('endpoint' in opt)) {
      opt.endpoint = self.endpoint;
    }

    if (!('version' in opt)) {
      opt.version = self.version;
    }

    return new TextRequest(self, query, opt);
  }
}

export default ConvoAnalyticsApi;
