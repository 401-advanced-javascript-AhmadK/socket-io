/* eslint-disable strict */
'use strict';

const sIoClient = require('socket.io-client');

const faker = require('faker');

const student = sIoClient.connect('http://localhost:3000');
const school = sIoClient.connect('http://localhost:3000/school');
const teacher = sIoClient.connect('http://localhost:3000/teacher');


setInterval(() =>{
  student.emit('student-speech', faker.hacker.phrase());
}, 8000);

setInterval(() =>{
  school.emit('school-speech', faker.hacker.phrase());
}, 3000);

setInterval(() =>{
  teacher.emit('teacher-speech', faker.hacker.phrase());
}, 5000);