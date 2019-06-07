const express = require('express');
const helmet = require('helmet');
const recipesRouter = require('./recipes/recipe-router.js');
// const studentsRouter = require('./students/students-router.js');
const server = express();

server.use(helmet());
server.use(express.json());


server.use('/api', recipesRouter);
// server.use('/api/students', studentsRouter);

module.exports = server;