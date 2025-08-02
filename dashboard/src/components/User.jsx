import React from 'react'
import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/Useuser';

export default function User() {
      const { id } = useParams();
      const { users} = useUser() || {};

      // Find user that matches the id
      const user = users.find((p) => p.id === id);

      if (!user) return <p>User not found</p>;
  return (
    <div>
      <div className="p-4" >
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.description}</p>
        <p className="text-lg font-semibold mt-2">{user.price}</p>
      </div>
    </div>
  );
}
