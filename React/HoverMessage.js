import React, { useState } from 'react';

function HoverMessage() {
  const [message, setMessage] = useState("Hover over the button to see a message!");

  const handleMouseEnter = () => {
    setMessage("You hovered over the button! 👋");
  };

  const handleMouseLeave = () => {
    setMessage("Hover over the button to see a message!");
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '100px auto',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9fafb',
      textAlign: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h2 style={{
        color: '#333',
        marginBottom: '20px'
      }}>{message}</h2>

      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        Hover Over Me
      </button>
    </div>
  );
}

export default HoverMessage;
