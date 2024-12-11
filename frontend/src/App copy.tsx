import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<div>Productos</div>} />
        <Route path="/users" element={<div>Usuarios Registrados</div>} />
      </Routes>
    </Router>
  );
};

export default App;
