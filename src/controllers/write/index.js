const constants = require('../../constants');
const fileOperation = require('../../utils/fileOperation');

const write = async (req, res) => {
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
};

module.exports = write;
