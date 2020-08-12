const express = require('express');
const app = express();

let routes = require('./routes');

const env = require('./config/env');

const PORT = process.env.PORT || 3003;
const HOST = process.env.HOST || 'localhost';

app.set('port', PORT);
app.set('host', HOST);

app.use('/', routes);

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log('Error creating server');
  } else {
    console.log(`Listening on http://${app.get('host')}:${app.get('port')} \nPress CTRL + C to exit server`);
  }
});
