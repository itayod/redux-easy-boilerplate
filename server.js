import express from 'express';

import webpack from 'webpack';
import webpackConfig from './webpack/common.config';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';

import configureStore from './src/store/configureStore';

require.extensions['.css'] = function() { return null }
require.extensions['.scss'] = function() { return null }

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

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
}));

app.use(express.static(__dirname + '/'));

app.get('/*', function (req, res) {
  const location = createLocation(req.url);
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
        {() =>
          <RoutingContext {...renderProps} />}
      </Provider>
    );

    const componentHTML = React.renderToString(InitialView);
    const initialState = store.getState();
    res.status(200).end(renderFullPage(componentHTML, initialState))
  });
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://localhost:3000');
});
