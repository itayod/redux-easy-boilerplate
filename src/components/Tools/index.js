import React, { Component } from 'react';

/* component styles */
import withStyles from '../../utils/withStyles.js';
import s from './styles.scss';

/* images */
let images = [];

@withStyles(s)
export class Tools extends Component {
  componentDidMount() {
    images['reactjs'] = require('./files/reactjs.png');
    images['redux'] = require('./files/redux.png');
    images['babel'] = require('./files/babel.png');
    images['webpack'] = require('./files/webpack.png');
    images['bootstrap'] = require('./files/bootstrap.png');
    images['mocha'] = require('./files/mocha.png');
  }
  render() {
    return (
      <section className={`${s.styles}`}>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>
                Boilerplate contains
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 tool">
              <img src={images['reactjs']} />
              <h4>
                React
              </h4>
            </div>

            <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 tool">
              <img src={images['redux']} />
              <h4>
                Redux
              </h4>
            </div>

            <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 tool">
              <img src={images['babel']} />
              <h4>
                Babel
              </h4>
            </div>

            <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 tool">
              <img src={images['webpack']} />
              <h4>
                Webpack
              </h4>
            </div>

            <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 tool">
              <img src={images['bootstrap']} />
              <h4>
                Bootstrap
              </h4>
            </div>

            <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 tool">
              <img src={images['mocha']} />
              <h4>
                Mocha
              </h4>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
