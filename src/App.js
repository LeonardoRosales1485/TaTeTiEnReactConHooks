import React, { useState } from "react";
import Celda from './components/celda.jsx'
import './App.css';

export default function App() {
  const [cuadros, setCuadros] = useState([]);
  return (
    <div className="App">
    <div>
      <Celda />
    </div>
    </div>
  );
}
