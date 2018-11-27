import React, { Component } from 'react'
import Header from './header.js';
import Footer from './footer.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'I am a Header Component',
      footer: 'I am a Footer Component',
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header header={this.state.header}/>
        <Footer footer={this.state.footer}/>
      </React.Fragment>
    )
  }
}

export default Main;