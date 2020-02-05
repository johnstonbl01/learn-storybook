import React, { useState, useEffect, Fragment } from 'react';
import Button from '../Button/Button';
import './Modal.css';

const Modal = ({ show, text, color = '#FFF' }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <div style={{ backgroundColor: color }} className="modal">
        <span className="modal--text">{text}</span>
        <Button onClick={() => setVisible(false)}>
          <span>Close</span>
        </Button>
      </div>
      <div className="shim" onClick={() => setVisible(false)} />
    </Fragment>
  );
};

export default Modal;
