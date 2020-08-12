const home = (req, res) => {
  res.end(
    `Please try following path for file operations:
         1. read: /read/<fileName>
         2. write: /write/<fileName>/<content>
         3. rename: /rename/<oldFileName>/<newFileName>
         4. delete: /del/<fileName>`,
  );
};

module.exports = home;
