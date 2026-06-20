import React, { useState } from 'react';

export default function Form(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'success');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'success');
  };

  const handlealternateClick = () => {
    let newText = '';

    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (char === char.toLowerCase()) {
        newText += char.toUpperCase();
      } else {
        newText += char.toLowerCase();
      }
    }

    setText(newText);
    props.showAlert('Converted to Alternate Case', 'success');
  };

  const handlecleartextClick = () => {
    setText('');
    props.showAlert('Text Cleared', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert('Extra Spaces Removed', 'success');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to Clipboard', 'success');
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });

    element.href = URL.createObjectURL(file);
    element.download = 'textUtils.txt';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    props.showAlert('Downloaded Text File', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      {' '}
      <div className="container">
        <h1 style={{ color: props.theme.text }}>{props.heading} </h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.theme.bg,
              color: props.theme.text,
              border:
                props.theme.navbar === 'light'
                  ? '1px solid #ced4da'
                  : '1px solid white',
            }}
          ></textarea>
        </div>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-dark mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-dark mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-dark mx-2 my-2"
          onClick={handlealternateClick}
        >
          Convert to Alternate Case
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-dark mx-2 my-2"
          onClick={handlecleartextClick}
        >
          Clear Text
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-dark mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-dark mx-2 my-2"
          onClick={handleCopyText}
        >
          Copy To Clipboard
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-dark mx-2 my-2"
          onClick={handleDownload}
        >
          Download .txt File
        </button>
      </div>
      <div className="container my-3" style={{ color: props.theme.text }}>
        <h1>Your Text Summary</h1>

        <p>
          {text.split(' ').filter((word) => word !== '').length} words and{' '}
          {text.length} characters
        </p>

        <p>
          {0.008 * text.split(' ').filter((word) => word !== '').length} Minutes
          Read
        </p>

        <h2>Preview</h2>

        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}
