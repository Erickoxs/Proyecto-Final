// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Users from './pages/UsersList';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Asegura que el contenido ocupe toda la altura de la pantalla */}
        <Navbar />
        
        <div className="flex-grow"> {/* Hace que este contenedor ocupe el espacio restante */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} /> {/* Detalles de producto */}
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Ruta de registro */}
          </Routes>
        </div>

        <Footer /> {/* El footer estará fijado al fondo */}
      </div>
    </Router>
  );
};

export default App;
