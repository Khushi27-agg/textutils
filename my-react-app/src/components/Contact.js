import React from 'react';

export default function Contact(props) {
  return (
    <div className="container" style={{
        color: props.theme.text
      }}>
      <h2>Contact Us</h2>
      <p>This is the contact page.</p>
      <p>Email: khushiaggarwal2702@gmail.com</p>
    </div>
  );
}
