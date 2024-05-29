const express = require('express');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/images', async (req, res) => {
  const { path: directoryPath } = req.query;

  if (!directoryPath) {
    return res.status(400).json({ error: 'Path query parameter is required' });
  }

  try {
    const absolutePath = path.join(__dirname, directoryPath);

    // 检查目录是否存在
    if (!await fs.pathExists(absolutePath)) {
      return res.status(404).json({ error: 'Directory not found' });
    }

    // 读取目录中的文件
    const files = await fs.readdir(absolutePath);

    // 过滤出图片文件
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp'];
    const imageFiles = files.filter(file => imageExtensions.includes(path.extname(file).toLowerCase()));

    res.json({ imagePaths: imageFiles });
  } catch (error) {
    console.error('Error reading directory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
