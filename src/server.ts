const app=require('./tools/app');
const http=require('http');
const chalk=require('chalk');

const port=process.env.PORT || 3000;

const server=http.createServer(app);
server.listen(port,console.log(chalk.blue.bold('Listening On Port '+port+' !')));