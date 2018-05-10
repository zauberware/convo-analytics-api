import { assert } from 'chai';
import ConvoAnalyticsApi from '../src/convoAnalyticsApi';

describe('Module exists', () => {
  it('should create a new API client', () => {
    var convoAnalyticsApi = new ConvoAnalyticsApi('MY_TOKEN', { language: 'de' });
    assert(convoAnalyticsApi !== null, 'API object could not be initialized');
  });

  it('should set API token', () => {
    var convoAnalyticsApi = new ConvoAnalyticsApi('MY_TOKEN', { language: 'de' });
      assert(convoAnalyticsApi.clientAccessToken !== null, 'not defined an API token.');
  });

  it('should set options', () => {
    var convoAnalyticsApi = new ConvoAnalyticsApi('MY_TOKEN', { language: 'de' });
    assert(convoAnalyticsApi.language !== null, 'options are not getting setted.');
  });

  it('should accept text request', () => {
    var convoAnalyticsApi = new ConvoAnalyticsApi('MY_TOKEN', { language: 'de' });
    assert(convoAnalyticsApi.textRequest({ 
      messageId: 'this-is-my-test-message-id', 
      text: 'Hello Test !', 
      sessionId: 'mySessionToken',
      sentTimestamp: Date.now() 
    }) !== null, 'cannot make a text request');
    
  });


});
