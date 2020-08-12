const MESSAGES = {
  read: {
    fail: 'Failed to read file',
    success: 'File read successfully',
  },

  write: {
    fail: 'Failed to write file',
    success: 'File successfully written',
  },

  rename: {
    fail: 'Failed to rename file',
    success: 'File renamed successfully',
  },

  delete: {
    fail: 'Failed to delete file',
    success: 'File successfully deleted',
  },
};

const SAVE_DIR = './files';

module.exports = {
  MESSAGES,
  SAVE_DIR,
};
