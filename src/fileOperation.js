const fs = require('fs');
const path = require('path');

const { SAVE_DIR } = require('./constants');

if (!fs.existsSync(SAVE_DIR)) {
  fs.mkdirSync(SAVE_DIR);
}

/**
 *
 * @param {function} reject
 * @param {function} resolve
 */
function handlePromise(reject, resolve) {
  return (err, done) => (err ? reject(err) : resolve(done));
}

/**
 *
 * @param {String} fileName
 * @param {String} content
 * @returns {Promise}
 */
const write = (fileName, content) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(SAVE_DIR, fileName);

    fs.writeFile(filePath, content, handlePromise(reject, resolve));
  });
};

/**
 *
 * @param {String} fileName
 * @param {String} encoding
 * @returns {Promise}
 */
const read = (fileName, encoding = 'UTF-8') => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(SAVE_DIR, fileName);

    fs.readFile(filePath, encoding, handlePromise(reject, resolve));
  });
};

/**
 *
 * @param {String} fileName
 * @param {String} newFileName
 * @returns {Promise}
 */
const rename = (fileName, newFileName) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(SAVE_DIR, fileName);
    const newFilePath = path.join(SAVE_DIR, newFileName);

    fs.rename(filePath, newFilePath, handlePromise(reject, resolve));
  });
};

/**
 *
 * @param {String} fileName
 * @returns {Promise}
 */
const del = (fileName) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(SAVE_DIR, fileName);

    fs.unlink(filePath, handlePromise(reject, resolve));
  });
};

module.exports = { read, write, rename, del };
