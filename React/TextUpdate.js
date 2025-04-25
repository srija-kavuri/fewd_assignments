import React, { useState } from 'react';

function TextUpdate() {
  const [text, setText] = useState("Hello, click the button to update me!");

  const handleClick = () => {
    setText("The text has been updated!");
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">{text}</h1>
      <button 
        onClick={handleClick} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </div>
  );
}

export default TextUpdate;