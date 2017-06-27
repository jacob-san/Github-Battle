import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app'
require('../css/style.css')

ReactDOM.render(<App/>
   , document.getElementById('root'));
