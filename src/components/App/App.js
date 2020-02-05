import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import bannerImage from './send-spam.png';
import './App.css';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="app">
      <img alt="banner" className="banner-image" src={bannerImage} />

      <section className="content-layout">
        <TextInput placeholder="Email address" />
        <Button
          disabled={formSubmitted}
          color="#FB127C"
          onClick={() => setFormSubmitted(true)}
          margin="0 0 0 24px"
        >
          <span>Send me spam!</span>
        </Button>
      </section>

      <Modal show={formSubmitted} text="Enjoy your salacious content!" />
    </div>
  );
}

export default App;
