import React from 'react';

function Footer(props) {
  return (
    <footer>
      <h3>What am I?</h3>
      <p>Refer to my props</p>
      <p>These are my "props": {props.basic}</p>
    </footer>
  )
}

export default Footer;