/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */

const http = require("http");

const app = require("./app");

app.set(8000);

const server = http.createServer(app);

server.listen(8000);
