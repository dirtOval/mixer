const YTDlpWrap = require('yt-dlp-wrap').default;

const init = async () => {
  let githubReleasesData = await YTDlpWrap.getGithubReleases(1, 5);
  await YTDlpWrap.downloadFromGithub();
  console.log('got YTDlp!');
  return new YTDlpWrap();
}

const getAudio = (id) => {
}


exports.init = init;
exports.getAudio = getAudio;