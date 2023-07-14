import React, {useState} from 'react';
// import YouTube from 'react-youtube';
import SearchBar from './SearchBar.jsx';

const opts = {
  height: '270',
  width: '480',
  playerVars: {
    origin: 'http://localhost:3000'
  }
};


const Video = (props) => {
  
  // const [videoId, setVideoId] = useState('H96RoJKqbN4');

  const getAudio = (url) => {
    fetch('http://localhost:6969/audio',)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div className="video">
      <SearchBar getAudio={getAudio} />
      {/* <YouTube videoId={videoId}
               opts={opts}
               onPlay={onPlay} /> */}
    </div>
  );
}

export default Video;