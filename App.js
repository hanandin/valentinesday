import React, { useState } from 'react';
import './App.css';

function App() {
  const [gif, setGif] = useState('https://gifdb.com/images/high/angry-animated-bears-9z416raof8j7etdu.gif');
  const [showButtons, setShowButtons] = useState(true);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [message, setMessage] = useState('Will you be my Valentine?');

  const moveButton = () => {
    const newX = Math.random() * (window.innerWidth - 150);
    const newY = Math.random() * (window.innerHeight - 100);
    setNoButtonStyle({
      position: 'absolute',
      left: `${newX}px`,
      top: `${newY}px`,
      transition: 'left 0.5s, top 0.5s'
    });
  };

  const handleNoClick = (event) => {
    event.preventDefault(); // Prevents the default action on mobile
    moveButton();
  };

  const handleYesClick = () => {
    setGif('https://64.media.tumblr.com/63c05a6fbc22eeb8cf3301f05e714bbb/11771f8b773a21f7-ef/s400x600/7dc6f86cca535f8a532f33acfd26164cbed71758.gif');
    setShowButtons(false);
    setMessage('You made my day! 💖');
  };

  return (
    <div className="App">
      <div className="content">
        <img src={gif} alt="Cute bear" className="bear-gif" />
        <p>{message}</p>
        {showButtons && (
          <div className="button-container">
            <button onClick={handleYesClick} className="yes-button">Yes</button>
            <button style={noButtonStyle} onTouchStart={handleNoClick} onMouseOver={moveButton} className="no-button">No</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
