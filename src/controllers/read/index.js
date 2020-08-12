const constants = require('../../constants');
const fileOperation = require('../../fileOperation');

const read = async (req, res) => {
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
};

module.exports = read;
