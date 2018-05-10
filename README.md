# Convo Analytics JS API client

For connecting with the convo analytics API. 

## Installation

### API Key

We are providing a lightweight web application to track, analyse and structure the conversations of all bots you have currently out there.

Create an account and retrieve an API key here ->

Add your API key to your environment variables. (e.g. in .env)

`CONVO_ANALYTICS_API_KEY=XXXAAAAPPPIIIIXXXXX`

### Install npm package

`npm install convo-analytics-api`

### Send a message to API

```
var ConvoAnalyticsApi = require('convo-analytics-api').default;

var convoAnalyticsApi = new ConvoAnalyticsApi(process.env.CONVO_ANALYTICS_API_KEY, { /* options */ });

convoAnalyticsApi.textRequest({
  timezone: undefined,
  language: 'en',
  sessionId: 'dcebb4c0-53de-11e8-889f-c51226743c13',
  messageId: 'eb899e70-53de-11e8-889f-c51226743c13',
  sentTimestamp: 1525907752430,
  type: 'message_sent',
  text: 'Hurra, ein Account ist da!',
  user: 'ea6f051d-d053-bfd5-430e-fe4eac9044c3',
  channel: 'socket',
  originalRequest: { /* whatever you original message was */ }
});

```

## Features
* Send textMessages to your account

## Upcoming
* Send imageMessage to your account
* Send audioMessage to your account
* Send videoMessage to your account

