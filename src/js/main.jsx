import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import '../styles/index.css';

// componente SecondsCounter
import SecondsCounter from './components/SecondsCounter';

const App = () => {
  // Segundos
  const [seconds, setSeconds] = useState(0);

  // Usar useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);  // Incrementar los segundos cada segundo
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);  

  return (
    <SecondsCounter seconds={seconds} />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);