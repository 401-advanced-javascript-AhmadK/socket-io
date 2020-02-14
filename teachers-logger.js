/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';

const sIoClient = require('socket.io-client');

const teacher_logger = sIoClient.connect('http://localhost:3000/teacher');

teacher_logger.on('message', payload=>{
  console.log(`teachers speech: ${payload}`);
});