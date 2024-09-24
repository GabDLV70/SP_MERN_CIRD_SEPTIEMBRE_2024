import React from 'react';

const TarjetaProducto = ({ nombreProducto, precio, descripcion, enStock }) => {
  return (
    <div className="card">
      <h2>{nombreProducto}</h2>
      <p>{`$${precio}`}</p>
      <p>{descripcion}</p>
      <p style={{ color: enStock ? 'green' : 'red' }}>
        {enStock ? 'En Stock' : 'Agotado'}
      </p>
    </div>
  );
};

export default TarjetaProducto;