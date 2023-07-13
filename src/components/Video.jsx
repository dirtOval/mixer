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
  
  const onPlay = (e) => {
    // console.log('youtube is ready :)');
    // console.log(e.target);
  }

  const getAudio = (url) => {

  }

  return (
    <div className="video">
      <SearchBar />
      {/* <YouTube videoId={videoId}
               opts={opts}
               onPlay={onPlay} /> */}
    </div>
  );
}

export default Video;