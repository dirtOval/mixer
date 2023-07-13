const express = require('express');
const app = express();
const port = 6969;

app.get('/audio', (req, res) => {
  res.send('beep boop beep heres your audio');
})

app.listen(port, () => {
  console.log('listening! :)');
});