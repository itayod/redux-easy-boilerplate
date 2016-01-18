import React, { Component } from 'react';

/* component styles */
import withStyles from '../../utils/withStyles.js';
import s from './styles.scss';

@withStyles(s)
export class Footer extends Component {
  render() {
    return (
      <footer className={`${s.styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a className="github-button"
              href="https://github.com/anorudes/redux-easy-boilerplate"
              data-icon="octicon-star"
              data-count-href="/anorudes/redux-easy-boilerplate/stargazers"
              data-count-api="/repos/anorudes/redux-easy-boilerplate#stargazers_count"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star anorudes/redux-easy-boilerplate on GitHub"
            >
              Star
            </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
