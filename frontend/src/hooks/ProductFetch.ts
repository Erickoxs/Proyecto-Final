// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import api from "../api/api";

// Interfaz que describe un producto basado en los datos esperados de la API
interface Product {
    _id: string; // Añadir _id como string
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    image?: string;
  }

// Estado del hook para manejar productos y errores
interface UseProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Hook personalizado para obtener los productos
const useProducts = () => {
  const [state, setState] = useState<UseProductsState>({
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get<Product[]>('/api/products');
        setState({ products: data, loading: false, error: null });
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred';
        setState({ products: [], loading: false, error: errorMessage });
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return state;
};

export default useProducts;
