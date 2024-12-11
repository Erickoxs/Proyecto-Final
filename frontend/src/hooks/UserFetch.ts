// src/hooks/useUsers.ts
import { useState, useEffect } from 'react';
import api from "../api/api";

// Interfaz que describe un usuario basado en los datos esperados de la API
interface User {
  name: string;
  email: string;
  direction: string;
  creationDate: string; // Corregido desde 'fechcreation'
}

// Estado del hook para manejar usuarios y errores
interface UseUsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// Hook personalizado para obtener los usuarios
const useUsers = () => {
  const [state, setState] = useState<UseUsersState>({
    users: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get<User[]>('/api/users');
        setState({ users: data, loading: false, error: null });
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred';
        setState({ users: [], loading: false, error: errorMessage });
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return state;
};

export default useUsers;
