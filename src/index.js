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

app.get('/read/:fileName', async (req, res) => {
  const { fileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.read;

  try {
    const data = await fileOperation.read(fileName);
    res.status(200).end(`${successMessage} ${fileName} \n Content \n ${data}`);
  } catch (err) {
    throw res.end(`${failedMessage} ${err}`);
  }
});

app.get('/write/:fileName/:content', async (req, res) => {
  const { fileName, content } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.write;

  try {
    await fileOperation.write(fileName, content);
    res.end(`${successMessage} ${fileName}`);
  } catch (err) {
    throw res.end(`${failedMessage} ${fileName} ${err}`);
  }
});

app.get('/rename/:oldFileName/:newFileName', async (req, res) => {
  const { oldFileName, newFileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.rename;

  try {
    await fileOperation.rename(oldFileName, newFileName);
    res.end(`${successMessage} from ${oldFileName} to ${newFileName}`);
  } catch (err) {
    throw res.end(`${failedMessage} from ${oldFileName} to ${newFileName} ${err}`);
  }
});

app.get('/delete/:fileName', async (req, res) => {
  const { fileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.read;

  try {
    await fileOperation.del(fileName);
    res.end(`${successMessage} ${fileName}`);
  } catch (err) {
    throw res.end(`${failedMessage} ${err}`);
  }
});

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log('Error creating server');
  } else {
    console.log(`Listening on http://${app.get('host')}:${app.get('port')} \nPress CTRL + C to exit server`);
  }
});
