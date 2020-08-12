const express = require('express');

const router = express.Router();

const constants = require('./constants');
const fileOperation = require('./fileOperation');

router.get('/', (req, res) => {
  res.end(
    `Please try following path for file operations:
        1. read: /read/<fileName>
        2. write: /write/<fileName>/<content>
        3. rename: /rename/<oldFileName>/<newFileName>
        4. delete: /del/<fileName>`,
  );
});

router.get('/read/:fileName', async (req, res) => {
  const { fileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.read;

  try {
    const data = await fileOperation.read(fileName);

    res.status(200).json({
      data,
      fileName,
      success: true,
      message: successMessage,
    });
  } catch (err) {
    throw res.json({
      success: false,
      message: failedMessage + err,
    });
  }
});

router.get('/write/:fileName/:content', async (req, res) => {
  const { fileName, content } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.write;

  try {
    await fileOperation.write(fileName, content);

    res.status(200).json({
      fileName,
      success: true,
      message: successMessage,
    });
  } catch (err) {
    throw res.json({
      success: false,
      message: failedMessage + err,
    });
  }
});

router.get('/rename/:oldFileName/:newFileName', async (req, res) => {
  const { oldFileName, newFileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.rename;

  try {
    await fileOperation.rename(oldFileName, newFileName);

    res.json({
      oldFileName,
      newFileName,
      success: true,
      message: successMessage,
    });
  } catch (err) {
    throw res.json({
      success: false,
      message: failedMessage + err,
    });
  }
});

router.get('/delete/:fileName', async (req, res) => {
  const { fileName } = req.params;
  const { success: successMessage, fail: failedMessage } = constants.MESSAGES.read;

  try {
    await fileOperation.del(fileName);

    res.json({
      fileName,
      success: true,
      message: successMessage,
    });
  } catch (err) {
    throw res.json({
      success: false,
      message: failedMessage + err,
    });
  }
});

module.exports = router;
