const read = require('./read');
const home = require('./home');
const del = require('./delete');
const write = require('./write');
const rename = require('./rename');

module.exports = {
  del,
  read,
  home,
  write,
  rename,
};
