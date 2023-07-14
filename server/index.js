const express = require('express');
const app = express();
const port = 6969;

app.get('/audio', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send('beep boop beep heres your audio');
})

app.listen(port, () => {
  console.log('listening! :)');
});