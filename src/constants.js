const MESSAGES = {
  read: {
    success: 'File read successfully',
    fail: 'Failed to read file',
  },

  write: {
    success: 'File successfully written',
    fail: 'Failed to write file',
  },

  rename: {
    success: 'File renamed successfully',
    fail: 'Failed to rename file',
  },

  delete: {
    success: 'File successfully deleted',
    fail: 'Failed to delete file',
  },
};

const SAVE_DIR = './files';

module.exports = {
  MESSAGES,
  SAVE_DIR,
};
