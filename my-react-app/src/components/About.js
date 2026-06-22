import React from 'react';
export default function About(props) {
  return (
    <>
      <div style={{
        color: props.theme.text
      }}>
        <h1>About Us</h1>
        <p>
          <b>Welcome to TextUtils</b>, your simple and efficient text-processing
          companion. TextUtils is designed to help users quickly analyze, edit,
          and transform text with ease. Whether you're a student, writer,
          developer, content creator, or professional, our goal is to provide
          useful tools that save time and improve productivity. With TextUtils,
          you can perform a variety of text-related operations, including:
        </p>
        <ul>
          <li>Free to Use</li>
          <li>Converting text between uppercase and lowercase</li>
          <li>Clears the whole text in a single click</li>
          <li>Counting words and characters</li>
          <li>Estimating reading time</li>
          <li>Previewing changes in real time</li>
        </ul>
        <p>
          We believe that text editing should be fast, accessible, and
          user-friendly. That's why TextUtils offers a clean interface,
          responsive performance, and practical features that work seamlessly
          across devices. Our mission is to simplify everyday text manipulation
          tasks and provide a reliable tool that helps users work more
          efficiently with written content. Thank you for choosing TextUtils.
          We're committed to continuously improving the platform and delivering
          the best possible experience for our users.{' '}
          <b>TextUtils — Simple tools for smarter text management</b>.
        </p>
      </div>
    </>
  );
}
