const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const baseDir = path.join(__dirname, 'public', 'neighborhood_network');

app.get('/api/files', (req, res) => {
  const { path: dirPath } = req.query;
  const fullPath = path.join(baseDir, dirPath);

  console.log(`Attempting to read directory: ${fullPath}`);

  fs.readdir(fullPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${fullPath}`, err);
      return res.status(500).json({ error: 'Unable to scan directory', details: err.message });
    }
    res.json(files);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
