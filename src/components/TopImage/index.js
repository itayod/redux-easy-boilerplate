import React, { Component } from 'react';

/* component styles */
import withStyles from '../../utils/withStyles.js';
import s from './styles.scss';

@withStyles(s)
export class TopImage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    setParallax(this.refs.parallax, 10);
  };

  render() {
    return (
      <section className={`${s.styles}`} ref="parallax">

      </section>
    );
  }
}
