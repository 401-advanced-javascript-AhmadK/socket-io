/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';

const sIoClient = require('socket.io-client');

const school_logger = sIoClient.connect('http://localhost:3000/school');

school_logger.on('message', payload=>{
  console.log(`school-speech: ${payload}`);
});