/* eslint-disable strict */
'use strict';

const sIo = require('socket.io')(3000);

sIo.on('connection', socket => {
  console.log(`connected to: ${socket.id}`);
  socket.on('student-speech', payload =>{
    sIo.emit('message', payload);
  });
});

const school = sIo.of('/school');

school.on('connection', socket =>{
  socket.on('school-speech', payload=>{
    school.emit('message', payload);
  });
});

const teacher = sIo.of('/teacher');

teacher.on('connection', socket =>{
  socket.on('teacher-speech', payload=>{
    teacher.emit('message', payload);
  });
});