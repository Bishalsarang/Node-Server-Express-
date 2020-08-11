const http = require('http');

const constants = require('./constants');
const fileHandler = require('./fileHandler');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const server = http.createServer((request, response) => {
  const [_, operationType, param1, param2] = decodeURIComponent(request.url).split('/');

  response.writeHead(constants.SUCCESS, {
    'content-type': 'text/html',
  });

  switch (operationType) {
    case 'read':
      fileHandler.handleRead(response, param1);
      break;

    case 'write':
      fileHandler.handleWrite(response, param1, param2);
      break;

    case 'rename':
      fileHandler.handleRename(response, param1, param2);
      break;

    case 'delete':
      fileHandler.handleDelete(response, param1);
      break;

    default:
      response.writeHead(constants.NOT_FOUND);
      fileHandler.handleNotFound(response);
  }
});

server.listen(PORT, HOST, (err) => {
  if (err) {
    console.log('Error creating server');
  } else {
    console.log(`Listening on  ${HOST}:${PORT}`);
  }

  console.log('Press CTRL + C to quit the server');
});
