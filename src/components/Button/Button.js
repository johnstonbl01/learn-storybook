import React from 'react';
import './Button.css';

/**
 *
 * This is the best and most complicated component ever
 */
const Button = ({
  onClick,
  children,
  color = '#0A0183',
  textColor = '#FFF',
  margin,
  disabled,
  ...props
}) => {
  const styles = {
    backgroundColor: disabled ? '#CDCDCD' : color,
    color: textColor,
    margin: margin || '0 0 0 0'
  };

  return (
    <button style={styles} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
