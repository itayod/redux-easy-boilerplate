import express from 'express';

import webpack from 'webpack';
import webpackConfig from './webpack/common.config';

import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';

import configureStore from './src/store/configureStore';

import routes from './src/routes';

const app = express();
const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `;
};

const compiler = webpack(webpackConfig);

app.get('/*', function (req, res) {
  const location = createLocation(req.url);
  const css = [];
  const context = { insertCss: (styles) => css.push(styles._getCss()) };
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps)
      return res.status(404).end('Not found');

    const store = configureStore();

    const InitialView = (
      <Provider store={store}>
        <RoutingContext {...renderProps} />
      </Provider>
    );

    const componentHTML = React.renderToString(InitialView);
    const initialState = store.getState();
    res.status(200).end(renderFullPage(componentHTML, initialState, ))
  });
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://localhost:3000');
});