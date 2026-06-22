import React from 'react';

export default function Contact(props) {
  return (
    <div
      className="container my-4"
      style={{
        color: props.theme.text,
      }}
    >
      <h1 className="mb-4">Contact Me</h1>
      <div className="card shadow-sm">
        <div
          className="card-body"
          style={{
            backgroundColor: props.theme.bg,
            color: props.theme.text,
          }}
        >
          <h4 className="card-title mb-3">Get in Touch</h4>

          <p>Feel free to connect with me through the following platforms:</p>

          <hr />

          <p>
            📧 <strong>Email:</strong>{' '}
            <a
              href="mailto:khushiaggarwal2702@gmail.com"
              style={{
                color: props.theme.text,
              }}
            >
              khushiaggarwal2702@gmail.com
            </a>
          </p>

          <p>
            💻 <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/Khushi27-agg"
              target="_blank"
              rel="noreferrer"
              style={{
                color: props.theme.text,
              }}
            >
              Visit GitHub Profile
            </a>
          </p>
          <p>
            🚀 Open to collaborations, learning opportunities, and exciting
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}
