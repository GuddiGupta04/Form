const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Set up storage engine
const storage = multer.diskStorage({
  destination: './uploads', // Save files here
  filename: (req, file, cb) => {
    const uniqueName = file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Route: show HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



// Route: handle file upload
app.post('/upload', upload.single('myfile'), (req, res) => {
  console.log('Uploaded file:', req.file);
  res.send(`✅ File uploaded successfully!`);
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
