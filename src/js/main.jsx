import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import '../styles/index.css';

// SecondsCounter
import SecondsCounter from './components/SecondsCounter';

let seconds = 0;

const updateCounter = () => {
  // la cantidad de segundos cada segundo
  seconds++;
  root.render(<App />);
};

// Inicializaml intervalo
setInterval(updateCounter, 1000);

const App = () => {
  return (
    <SecondsCounter seconds={seconds} />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);