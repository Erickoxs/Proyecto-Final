import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* Contenedor de Productos */}
      <div 
        style={{
          flex: 1,
          marginRight: '20px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          cursor: 'pointer',
          textAlign: 'center'
        }}
        onClick={() => navigate('/products')}
      >
        <h2>Productos</h2>
      </div>

      {/* Contenedor de Usuarios */}
      <div 
        style={{
          flex: 1,
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          cursor: 'pointer',
          textAlign: 'center'
        }}
        onClick={() => navigate('/users')}
      >
        <h2>Usuarios Registrados</h2>
      </div>
    </div>
  );
};

export default Home;
