import React, {useState} from 'react';

const Control = (props) => {

  // const [volume, setVolume] = useState(100); 

  const onChange = (e) => {
    props.setVolume(e.target.value);
  }

  return (
    <div className="control">
      <form className="controls">
        <label htmlFor="volume">Volume</label>
        <input type="range"
               min="0"
               max="100"
               id="volume"
               name="volume"
               value={props.volume}
               onChange={onChange} />
        <span>{props.volume}%</span>
        
      </form>
    </div>
  );
}

export default Control;