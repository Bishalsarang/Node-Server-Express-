const express = require('express');
const app = express();

const env = require('./env');

const fileOperation = require('./fileOperation');
const constants = require('./constants');

const PORT = process.env.PORT || 3003;
const HOST = process.env.HOST || 'localhost';

app.set('port', PORT);
app.set('host', HOST);

app.get('/', (req, res) => {
  res.end(
    `Please try following path for file operations:
       1. read: /read/<fileName>
       2. write: /write/<fileName>/<content>
       3. rename: /rename/<oldFileName>/<newFileName>
       4. delete: /del/<fileName>`,
  );
});

app.get('/read/:fileName', (req, res) => {
  const { fileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.read;

  fileOperation
    .read(fileName)
    .then((data) => res.end(`${successMessage} ${fileName} \n Content \n ${data}`))
    .catch((err) => res.end(`${failedMessage} ${err}`));
});

app.get('/write/:fileName/:content', (req, res) => {
  const { fileName, content } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.write;

  fileOperation
    .write(fileName, content)
    .then(() => res.end(`${successMessage} ${fileName}`))
    .catch((err) => res.end(`${failedMessage} ${fileName} ${err}`));
});

app.get('/rename/:oldFileName/:newFileName', (req, res) => {
  const { oldFileName, newFileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.rename;

  fileOperation
    .rename(oldFileName, newFileName)
    .then(() => res.end(`${successMessage} from ${oldFileName} to ${newFileName}`))
    .catch((err) => res.end(`${failedMessage} from ${oldFileName} to ${newFileName} ${err}`));
});

app.get('/delete/:fileName', (req, res) => {
  const { fileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.read;

  fileOperation
    .del(fileName)
    .then(() => res.end(`${successMessage} ${fileName}`))
    .catch((err) => res.end(`${failedMessage} ${err}`));
});

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log('Error creating server');
  } else {
    console.log(`Listening on ${app.get('host')}:${app.get('port')} \nPress CTRL + C to exit server`);
  }
});
