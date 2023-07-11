import React, {useState, useEffect} from 'react';
import Control from './Control.jsx';

const ControlPanel = (props) => {

  const [leftVolume, setLeftVolume] = useState(100);
  const [rightVolume, setRightVolume] = useState(100);

  // useEffect(() => {
  //   let streams = document.getElementsByClassName('video-stream');
  //   console.log(streams);
  //   // let leftSource = context.createMediaElementSource(streams[0]);
  //   // let rightSource = context.createMediaElementSource(streams[1]);

  //   let leftGain = context.createGain();
  //   let rightGain = context.createGain();


  // },[])

  return (
    <div className="control-panel">
      <Control volume={leftVolume}
               setVolume={setLeftVolume}/>
      <Control volume={rightVolume}
               setVolume={setRightVolume}/>
    </div>
  )
}

export default ControlPanel;