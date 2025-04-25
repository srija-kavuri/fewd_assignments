import React, { useState, useRef } from 'react';
import dog from '../assets/dog.png';

function FocusBlur() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isTextFocused, setIsTextFocused] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const textRef = useRef(null);

  const handleTextClick = () => {
    textRef.current?.focus();
    setIsTextFocused(true);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '100px',
        fontFamily: 'Segoe UI, sans-serif'
      }}
    >
      {/* Input with focus border */}
      <input
        type="text"
        placeholder="Click me!"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        style={{
          padding: '12px 20px',
          borderRadius: '8px',
          border: `2px solid ${isInputFocused ? '#4f46e5' : '#ccc'}`,
          outline: 'none',
          transition: 'border 0.3s ease',
          fontSize: '16px',
          marginBottom: '40px'
        }}
      />

      <br />

      {/* Clickable/Editable text */}
      <div
        ref={textRef}
        contentEditable
        suppressContentEditableWarning
        onClick={handleTextClick}
        onBlur={() => setIsTextFocused(false)}
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
        style={{
          display: 'inline-block',
          fontSize: '20px',
          color: '#222',
          border: isTextFocused ? '2px solid #4f46e5' : '2px solid transparent',
          padding: '8px',
          borderRadius: '6px',
          filter: isTextHovered ? 'blur(3px)' : 'none',
          transition: 'filter 0.3s ease, border 0.3s ease',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        Click and edit this text
      </div>

      <br />

      {/* Hover Blur Image */}
      <img
        src={dog}
        alt="Sample"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
        style={{
          width: '200px',
          borderRadius: '12px',
          filter: isImageHovered ? 'blur(3px)' : 'none',
          transition: 'filter 0.3s ease',
          cursor: 'pointer'
        }}
      />
    </div>
  );
}

export default FocusBlur;
