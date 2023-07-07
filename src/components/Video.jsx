import React from 'react';
import YouTube from 'react-youtube';

const Video = (props) => {

  const opts = {
    height: '390',
    width: '640',
  };

  return (
    <div className="video">
      <YouTube videoId="H96RoJKqbN4" opts={opts} />
    </div>
  );
}

export default Video;