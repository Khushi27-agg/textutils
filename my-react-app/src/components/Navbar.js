import { Link } from 'react-router-dom';
import React from 'react';

function Navbar(props) {
  return (
    <div className="App">
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theme.navbar} bg-${props.theme.navbar}`}
      >
        {' '}
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              props.theme.navbar === 'light' ? 'dark' : 'light'
            }`}
            to="/"
          >
            {props.title}{' '}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.theme.navbar === 'light' ? 'dark' : 'light'
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.theme.navbar === 'light' ? 'dark' : 'light'
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.theme.navbar === 'light' ? 'dark' : 'light'
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div
                className="bg-light border rounded-circle mx-1"
                style={{
                  height: '25px',
                  width: '25px',
                  cursor: 'pointer',
                  border: '2px solid white',
                }}
                onClick={() => props.changeTheme('light')}
                title="Light Theme"
              ></div>

              <div
                className="bg-primary rounded-circle mx-1"
                style={{
                  height: '25px',
                  width: '25px',
                  cursor: 'pointer',
                  border: '2px solid white',
                }}
                onClick={() => props.changeTheme('blue')}
                title="Blue Theme"
              ></div>

              <div
                className="bg-success rounded-circle mx-1"
                style={{
                  height: '25px',
                  width: '25px',
                  cursor: 'pointer',
                  border: '2px solid white',
                }}
                onClick={() => props.changeTheme('green')}
                title="Green Theme"
              ></div>

              <div
                className="bg-dark rounded-circle mx-1"
                style={{
                  height: '25px',
                  width: '25px',
                  cursor: 'pointer',
                  border: '2px solid white',
                }}
                onClick={() => props.changeTheme('dark')}
                title="Dark Theme"
              ></div>

              <div
                className="rounded-circle mx-1"
                style={{
                  height: '25px',
                  width: '25px',
                  cursor: 'pointer',
                  backgroundColor: '#6f42c1',
                  border: '2px solid white',
                }}
                onClick={() => props.changeTheme('purple')}
                title="Purple Theme"
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
