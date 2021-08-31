import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Tick() {
const watch = <h1>Локальное время {new Date().toLocaleTimeString()}</h1>;
ReactDOM.render(
  watch,
  document.getElementById('root')
);
};

setInterval(Tick, 30000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
