import React from 'react';
import useProducts from "../hooks/ProductFetch"; // Asegúrate de que la ruta sea correcta

const Products: React.FC = () => {
  const { products, loading, error } = useProducts(); // Desestructuramos el estado

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (  // TypeScript puede inferir correctamente el tipo
       <a href={`/products/${product._id.toString()}`}>
     
          <li key={product.name}>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
            <p>Categoría: {product.category}</p>
            <p>Stock disponible: {product.stock}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </li> </a>
        ))}
      </ul>
    </div>
  );
};

export default Products;
