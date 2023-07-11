import React, {useState} from 'react';
import './App.scss';
import VideoPanel from './VideoPanel.jsx';
import ControlPanel from './ControlPanel.jsx';

function App() {

  let context = new AudioContext();

  const [leftSource, setLeftSource] = useState(null);
  const [rightSource, setRightSource] = useState(null);


  return (
    <div className="app">
      <VideoPanel setLeftSource={setLeftSource}
                  setRightSource={setRightSource} />
      <ControlPanel />
    </div>
  );
}

export default App;
