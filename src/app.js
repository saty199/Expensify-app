import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import { dim } from 'ansi-colors';


ReactDOM.render(<AppRouter />,document.getElementById('app'));

