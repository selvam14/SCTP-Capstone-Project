import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const refreshTime = () => {
    setCurrentTime(new Date());
  };

  return (
    <div className="App">
      <h1>Current Time</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
      <button onClick={refreshTime}>Refresh Time</button>
    </div>
  );
}

export default App;
