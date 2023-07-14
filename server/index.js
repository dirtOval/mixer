const express = require('express');
const app = express();
const port = 6969;
// import {init, getAudio} from './ytDlp.js';
const ytDlp = require('./ytDlp.js');

let YTDlp;

app.get('/audio', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json({"message": "beep boop beep heres your audio"});
})

app.listen(port, () => {
  YTDlp = ytDlp.init();
  console.log('listening! :)');
});