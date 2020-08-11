const env = require('./env');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3003;
const HOST = process.env.HOST || 'localhost';

app.set('port', PORT);
app.set('host', HOST);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(app.get('port'), app.get('host'), () =>
  console.log(`Listening on ${app.get('host')}:${app.get('port')} \nPress CTRL + C to exit server`),
);
