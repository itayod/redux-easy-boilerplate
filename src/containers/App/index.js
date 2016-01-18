import React, { Component } from 'react';

/* global styles for app */
if (process.env.BROWSER) {
  require('./styles/app.scss');
}

/* application components */
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export class App extends Component {
  render() {
    return (
      <section>
        <Header />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
