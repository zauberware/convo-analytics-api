import { assert } from 'chai';
import ConvoAnalyticsApi from '../src/convoAnalyticsApi';

describe('Module exists', () => {
  it('should create a new API client', () => {
    var convoAnalyticsApi = new ConvoAnalyticsApi('KuUYUwdaWD8oRINgQFRHH963YosZ3Lje529c0FVp', { language: 'de' });
    assert(convoAnalyticsApi !== null, 'API object could not be initialized');
  });

  it('should set API token', () => {
    var convoAnalyticsApi = new ConvoAnalyticsApi('KuUYUwdaWD8oRINgQFRHH963YosZ3Lje529c0FVp', { language: 'de' });
      assert(convoAnalyticsApi.clientAccessToken !== null, 'not defined an API token.');
  });

  it('should set options', () => {
    var convoAnalyticsApi = new ConvoAnalyticsApi('KuUYUwdaWD8oRINgQFRHH963YosZ3Lje529c0FVp', { language: 'de' });
    assert(convoAnalyticsApi.language !== null, 'options are not getting setted.');
  });

  it('should accept text request', () => {
    var convoAnalyticsApi = new ConvoAnalyticsApi('KuUYUwdaWD8oRINgQFRHH963YosZ3Lje529c0FVp', { language: 'de' });
    assert(convoAnalyticsApi.textRequest({ 
      user_id: 'this-is-my-user-id', 
      type: 'user', 
      time_stamp: Date.now(),
      platform: 'test',
      text: "my test message"
    }) !== null, 'cannot make a text request');
    
  });


});
