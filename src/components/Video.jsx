import React from 'react';
import YouTube from 'react-youtube';
import SearchBar from './SearchBar.jsx';

const Video = (props) => {

  const opts = {
    height: '270',
    width: '480',
  };

  return (
    <div className="video">
      <SearchBar />
      <YouTube videoId="H96RoJKqbN4" opts={opts} />
    </div>
  );
}

export default Video;