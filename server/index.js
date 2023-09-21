const express = require('express');
const YTDlpWrap = require('yt-dlp-wrap').default;
const fs = require('fs');
const path = require('path');
const app = express();
const port = 6969;
// const {ytDlp} = require('./ytDlp.js');


app.get('/audio', async (req, res) => {
  console.log('lets fucking rock');
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  // let data = {
  //   data: ''
  // }
  let githubReleasesData = await YTDlpWrap.getGithubReleases(1, 5);
  if (!fs.existsSync('./yt-dlp.exe')) {
    console.log('downloading YTDlp!');
    await YTDlpWrap.downloadFromGithub();
  } else {
    console.log('YTDlp found!');
  }
  const ytDlp = await new YTDlpWrap('./yt-dlp.exe');
  setTimeout(() => {
    console.log('downloading');
    ytDlp.exec([
      'https://www.youtube.com/watch?v=' + 'H96RoJKqbN4',
      // '--extract-audio',
      '-f',
      'ba',
      '-o',
      'H96RoJKqbN4.mp3'
    ])
    .on('progress', (progress) =>
        console.log(
            progress.percent,
            progress.totalSize,
            progress.currentSpeed,
            progress.eta
        )
    )
    .on('ytDlpEvent', (eventType, eventData) =>
        console.log(eventType, eventData)
    )
    .on('error', (error) => console.error(error))
    .on('close', () => {
      console.log('all done');
      res.sendFile(path.resolve('H96RoJKqbN4.mp3'));
      fs.unlink('H96RoJKqbN4.mp3', err => {
        if (err) throw err;
        console.log('cleaning up :O');
      })
    });
    
  }, 3000)
})

app.listen(port, () => {
  console.log('listening! :)');
});