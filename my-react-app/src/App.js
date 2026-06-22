import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState({
    bg: 'white',
    text: 'black',
    navbar: 'light',
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const changeTheme = (color) => {
    if (color === 'light') {
      setTheme({
        bg: 'white',
        text: 'black',
        navbar: 'dark',
      });

      document.body.style.backgroundColor = 'white';
    }

    if (color === 'dark') {
      setTheme({
        bg: '#042743',
        text: 'white',
        navbar: 'dark',
      });

      document.body.style.backgroundColor = '#042743';
    }

    if (color === 'blue') {
      setTheme({
        bg: '#233554',
        text: 'white',
        navbar: 'dark',
      });

      document.body.style.backgroundColor = '#233554';
    }

    if (color === 'green') {
      setTheme({
        bg: '#0B3A2C',
        text: 'white',
        navbar: 'dark',
      });

      document.body.style.backgroundColor = '#0B3A2C';
    }

    if (color === 'purple') {
      setTheme({
        bg: '#2A1B3D',
        text: 'white',
        navbar: 'dark',
      });

      document.body.style.backgroundColor = '#2A1B3D';
    }

    showAlert(`${color} theme enabled`, 'success');
  };

  return (
    <>
      <Navbar title="TextUtils" theme={theme} changeTheme={changeTheme} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Form
                heading="Enter the text to analyze"
                theme={theme}
                showAlert={showAlert}
              />
            }
          />

          <Route path="/about" element={<About theme={theme} />} />

          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
