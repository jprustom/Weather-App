"use strict";
var app = require('./tools/app');
var http = require('http');
var chalk = require('chalk');
var port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port, console.log(chalk.blue.bold('Listening On Port ' + port + ' !')));
