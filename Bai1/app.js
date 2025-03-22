const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('<h1>Xin chào Tôi là Đỗ Tiến Lượng từ ứng dụng Node.js trong Docker!</h1>');
});

app.listen(port, () => {
  console.log(`Ứng dụng đang lắng nghe tại http://localhost:${port}`);
});