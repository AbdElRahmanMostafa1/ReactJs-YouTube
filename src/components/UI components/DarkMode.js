import React, { useState } from 'react';
import './DarkMode.css';

const DarkMode = () => {
  // Define State
  const [isDark, setIsDark] = useState(false);
  // Define Functions
  const setDarkMode = () => {
    setIsDark(!isDark);
  }

  return (
    <div className='dark-mode'>
      <span 
        className={`dark-mode-slider ${!isDark? '' : 'dark'}`}
        onClick={setDarkMode}
      >
      </span>
    </div>
  )
}

export default DarkMode
