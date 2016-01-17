import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './store/configureStore';
import routes from './routes';

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore();

syncReduxAndRouter(history, store);

// DEV:
// import fs from 'fs';
// const fs = require('fs');

// var _getAllFilesFromFolder = function(dir) {

//   // var filesystem = require("fs");
//   var results = [];

//   console.log(fs);

//   // filesystem.readdirSync(dir).forEach(function(file) {

//   //   file = dir + '/' + file;
//   //   var stat = filesystem.statSync(file);

//   //   if (stat && stat.isDirectory()) {
//   //     results = results.concat(_getAllFilesFromFolder(file))
//   //   } else results.push(file);

//   // });

//   return results;

// };

// fs.readFile('routes.js', function (err, logData) {

//   // Если произошла ошибка, то мы генерируем исключение,
//   // и работа приложения завершается
//   if (err) throw err;

//   // logData имеет тип Buffer, переводим в string
//   var text = logData.toString();
//   console.log(text);
// });

// console.log(fs);
// console.log(fs.readdir('./', console.log('err')));

// < DEV

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="home" />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
