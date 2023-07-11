import React from 'react';
import './App.scss';
import VideoPanel from './VideoPanel.jsx';
import ControlPanel from './ControlPanel.jsx';

function App() {
  
  return (
    <div className="app">
      <VideoPanel />
      <ControlPanel />
    </div>
  );
}

export default App;
