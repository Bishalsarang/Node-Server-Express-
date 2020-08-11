const express = require('express');
const app = express();

const env = require('./env');

const fileOperation = require('./fileOperation');

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

  fileOperation
    .read(fileName)
    .then((data) => res.end(`File read successfully ${fileName} \n Content \n ${data}`))
    .catch((err) => res.end(`Failed to read file ${err}`));
});

app.get('/write/:fileName/:content', (req, res) => {
  const { fileName, content } = req.params;

  fileOperation
    .write(fileName, content)
    .then(() => res.end(`File successfully written ${fileName}`))
    .catch((err) => res.end('Failed to write file' + err));
});

app.get('/rename/:oldFileName/:newFileName', (req, res) => {
  const { oldFileName, newFileName } = req.params;

  fileOperation
    .rename(oldFileName, newFileName)
    .then(() => res.end(`File renamed successfully from ${oldFileName} to ${newFileName}`))
    .catch((err) => res.end('Failed to rename file' + err));
});

app.get('/delete/:fileName', (req, res) => {
  const { fileName } = req.params;

  fileOperation
    .del(fileName)
    .then(() => res.end(`File deleted successfully ${fileName}`))
    .catch((err) => res.end('Failed to delete file ' + err));
});

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log('Error creating server');
  } else {
    console.log(`Listening on ${app.get('host')}:${app.get('port')} \nPress CTRL + C to exit server`);
  }
});
