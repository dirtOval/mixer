import React, {useState} from 'react';
import YouTube from 'react-youtube';
import SearchBar from './SearchBar.jsx';

const opts = {
  height: '270',
  width: '480',
  playerVars: {
    origin: 'http://localhost:3000'
  }
};


const Video = (props) => {
  
  const [videoId, setVideoId] = useState('H96RoJKqbN4');
  
  const onReady = (e) => {
    console.log('youtube is ready :)');
  }

  return (
    <div className="video">
      <SearchBar setVideoId={setVideoId} />
      <YouTube videoId={videoId}
               opts={opts}
               onReady={onReady} />
    </div>
  );
}

export default Video;