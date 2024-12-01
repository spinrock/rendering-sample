'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react'; 

type User = {
  id: string;
  username: string;
}

const CsrSamplePage: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsersData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div
      className='mx-4'
    >
      <p className='text-xl'>
        This is CSR(Client Side Rendering) Page.
      </p>
      <ul className='mt-2'>
        {users.map((user) => (
          <li key={user.id}>
            <p className='text-base'>
              {user.username}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CsrSamplePage;