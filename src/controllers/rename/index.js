const constants = require('../../constants');
const fileOperation = require('../../fileOperation');

const rename = async (req, res) => {
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
};

module.exports = rename;
