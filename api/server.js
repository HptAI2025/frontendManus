const express = require('express');
const app = express();

// Một route API mẫu
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Chào bạn từ API!' });
});

// Vercel sẽ tự động xử lý việc chạy server, bạn không cần app.listen
module.exports = app;
