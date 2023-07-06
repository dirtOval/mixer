import React from 'react';
import Video from './Video.jsx';

const VideoPanel = (props) => {
  return (
    <div className="video-row">
      <Video />
      <Video />
    </div>
  )
}

export default VideoPanel;