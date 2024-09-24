import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

import TarjetaProducto from './components/TarjetaProducto';

const App = () => {
  return (
    <div className="App">
      <TarjetaProducto
        nombreProducto="Laptop"
        precio={1500}
        descripcion="Una potente laptop para trabajar y jugar."
        enStock={true}
      />
      <TarjetaProducto
        nombreProducto="Smartphone"
        precio={800}
        descripcion="Un smartphone de última generación."
        enStock={false}
      />
      <TarjetaProducto
        nombreProducto="Auriculares"
        precio={200}
        descripcion="Auriculares con cancelación de ruido."
        enStock={true}
      />
      <TarjetaProducto
        nombreProducto="Monitor"
        precio={300}
        descripcion="Monitor 4K para una experiencia visual increíble."
        enStock={true}
      />
    </div>
  );
};

export default App;