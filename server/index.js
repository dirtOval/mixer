const express = require('express');
const YTDlpWrap = require('yt-dlp-wrap').default;
const app = express();
const port = 6969;
// const {ytDlp} = require('./ytDlp.js');


app.get('/audio', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  // let data = {
  //   data: ''
  // }
  let githubReleasesData = await YTDlpWrap.getGithubReleases(1, 5);
  await YTDlpWrap.downloadFromGithub();
  console.log('got YTDlp!');
  const ytDlp = await new YTDlpWrap('./yt-dlp.exe');
  setTimeout(() => {
    let stream = ytDlp.execStream([
      'https://www.youtube.com/watch?v=' + 'H96RoJKqbN4',
      '--extract-audio'
      // '-f',
      // "'ba'",
      // '-x',
      // '--audio-format',
      // 'mp3',
      // '-o',
      // "'%(id)s.%(ext)s'"
    ])
    stream.pipe(res);
  }, 5000)
  // console.log(JSON.stringify(ytDlp));
})

app.listen(port, () => {
  console.log('listening! :)');
});