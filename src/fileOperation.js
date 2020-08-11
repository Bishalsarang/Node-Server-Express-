const fs = require('fs');

function handlePromise(reject, resolve) {
  return (err, done) => (err ? reject(err) : resolve(done));
}

/**
 *
 * @param {String} filePath
 * @param {String} content
 * @returns {Promise}
 */
const write = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, handlePromise(reject, resolve));
  });
};

/**
 *
 * @param {String} filePath
 * @param {String} encoding
 * @returns {Promise}
 */
const read = (filePath, encoding = 'UTF-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, handlePromise(reject, resolve));
  });
};

/**
 *
 * @param {String} filePath
 * @param {String} newFilePath
 * @returns {Promise}
 */
const rename = (filePath, newFilePath) => {
  return new Promise((resolve, reject) => {
    fs.rename(filePath, newFilePath, handlePromise(reject, resolve));
  });
};

/**
 *
 * @param {String} filePath
 * @returns {Promise}
 */
const del = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, handlePromise(reject, resolve));
  });
};

module.exports = { read, write, rename, del };
