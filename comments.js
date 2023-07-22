// Create web server
// 1. Create express web server
// 2. Create GET route for /comments
//  - array of comments
// 3. Setup port to 3000
// 4. Start server and test
// 5. Visit localhost:3000/comments and localhost:3000/comments?name=foo
// 6. Visit localhost:3000/comments?name=foo&age=21
// 7. Visit localhost:3000/comments?name=foo&age=21&location=bar
// 8. Visit localhost:3000/comments?name=foo&age=21&location=bar&location=foo

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  console.log(req.query);
  res.send('Hello');
});

app.get('/comments', (req, res) => {
  console.log(req.query);
  res.send('Hello');
});

app.get('/comments', (req, res) => {
  console.log(req.query);
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});