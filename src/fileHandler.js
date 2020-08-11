/**
 * fileHandler.js
 * This file contains all the filehandle logic for read, write, rename and delete operations
 */
const fileOperation = require('./fileOperation');

/**
 *
 * @param {Object} response
 * @param {String} fileName
 */
const handleRead = (response, fileName) => {
  fileOperation
    .read(fileName)
    .then((data) =>
      response.end(
        `File read successfully ${fileName}: 
             <h3>File Content</h3>
             <p style="background: lightgray; color: white; padding: 10px">${data}</p>`,
      ),
    )
    .catch((err) => response.end(`<span style="background: red">Failed to read file ${err}</span> `));
};

/**
 *
 * @param {Object} response
 * @param {String} fileName
 * @param {String} content
 */
const handleWrite = (response, fileName, content) => {
  fileOperation
    .write(fileName, content)
    .then(() => response.end('File successfully written: '))
    .catch((err) => response.end('Failed to write file', err));
};

/**
 *
 * @param {Object} response
 * @param {String} oldFileName
 * @param {String} newFileName
 */
const handleRename = (response, oldFileName, newFileName) => {
  fileOperation
    .rename(oldFileName, newFileName)
    .then(() => response.end('File renamed successfully'))
    .catch((err) => response.end('Failed to rename ' + err));
};

/**
 *
 * @param {Object} response
 * @param {String} fileName
 */
const handleDelete = (response, fileName) => {
  fileOperation
    .del(fileName)
    .then(() => response.end('File deleted successfully'))
    .catch((err) => response.end('Failed to delete file ' + err));
};

/**
 *
 * @param {Object} response
 */
const handleNotFound = (response) => {
  response.end(
    `Invalid Command. Please try following path for file operations:
       1. read: /read/fileName
       2. write: /write/filename/content
       3. rename: /rename/oldFileName/newFileName
       4. delete: /del/fileName`,
  );
};

module.exports = {
  handleRead,
  handleWrite,
  handleRename,
  handleDelete,
  handleNotFound,
};
