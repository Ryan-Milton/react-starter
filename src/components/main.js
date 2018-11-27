import React, { Component } from 'react'
import Header from './header.js';
import Footer from './footer.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <Header basic="I am a Header Component"/>
        <Footer basic="I am a Footer Component"/>
      </React.Fragment>
    )
  }
}

export default Main;