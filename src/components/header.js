import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>Hello World</h1>
      <p>This is a React application</p>
      <p>These are my "props": {props.header}</p>
    </header>
  );
}

export default Header;