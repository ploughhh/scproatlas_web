const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/api/files', (req, res) => {
  const directoryPath = path.join(__dirname, 'public', decodeURIComponent(req.query.path));
  console.log(`Requested path: ${directoryPath}`);  // 打印路径以进行调试

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error scanning directory: ${err.message}`);  // 打印详细错误信息
      return res.status(500).send('Unable to scan directory: ' + err);
    }
    res.json(files);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
