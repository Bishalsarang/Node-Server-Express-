const constants = require('../../constants');
const fileOperation = require('../../utils/fileOperation');

const del = async (req, res) => {
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
};

module.exports = del;
