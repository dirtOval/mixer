import React from 'react';
import Video from './Video.jsx';

const VideoPanel = (props) => {

  return (
    <div className="video-panel">
      <Video setSource={props.setLeftSource} />
      <Video setSource={props.setRightSource} />
    </div>
  )
}

export default VideoPanel;