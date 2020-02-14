/* eslint-disable strict */
'use strict';

const sIoClient = require('socket.io-client');

const logger = sIoClient.connect('http://localhost:3000');

logger.on('message', payload=>{
  console.log(`I listen to you: ${payload}`);
});