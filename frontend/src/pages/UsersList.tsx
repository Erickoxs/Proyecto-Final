import React from 'react';
import useUsers from "../hooks/UserFetch"; // Asegúrate de que la ruta sea correcta

const Users: React.FC = () => {
  const { users, loading, error } = useUsers(); // Desestructuramos el estado

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map((user) => (  // TypeScript puede inferir correctamente el tipo
          
            <li>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Dirección: {user.direction}</p>
              <p>Fecha de registro: {user.creationDate}</p>
            </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Users;
