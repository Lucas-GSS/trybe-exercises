import React from 'react';
import ReactDOM from 'react-dom'; // Importa React DOM
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './Component'; // Importa meu componente para o render

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
