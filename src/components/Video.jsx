import React, {useState} from 'react';
import YouTube from 'react-youtube';
import SearchBar from './SearchBar.jsx';

const Video = (props) => {

  const [videoId, setVideoId] = useState('H96RoJKqbN4');

  const opts = {
    height: '270',
    width: '480',
  };

  return (
    <div className="video">
      <SearchBar setVideoId={setVideoId} />
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default Video;