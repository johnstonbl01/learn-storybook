import React, { useState } from 'react';
import './TextInput.css';

const TextInput = ({ defaultValue, onKeyDown, onTextChange, variant = 'outline', ...props }) => {
  const [text, setText] = useState(defaultValue || '');
  const outlineStyle = variant === 'outline' && 'textinput--outline';

  return (
    <div className="textinput--layout">
      <input
        aria-label={props.name}
        className={outlineStyle}
        type="text"
        value={text}
        onChange={evt => setText(evt.target.value)}
        onKeyDown={onKeyDown}
        {...props}
      />
    </div>
  );
};

export default TextInput;
