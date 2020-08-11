const fs = require('fs');

/**
 *
 * @param {String} filePath
 * @param {String} content
 */
const write = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err, done) => (err ? reject(err) : resolve(done)));
  });
};

/**
 *
 * @param {String} filePath
 * @param {String} encoding
 */
const read = (filePath, encoding = 'UTF-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, done) => (err ? reject(err) : resolve(done)));
  });
};

/**
 *
 * @param {String} filePath
 * @param {String} newFilePath
 */
const rename = (filePath, newFilePath) => {
  return new Promise((resolve, reject) => {
    fs.rename(filePath, newFilePath, (err, done) => (err ? reject(err) : resolve(done)));
  });
};

/**
 *
 * @param {String} filePath
 */
const del = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err, done) => (err ? reject(err) : resolve(done)));
  });
};

module.exports = { read, write, rename, del };
