import type { FC } from 'react';

type User = {
  id: string;
  username: string;
}

const SsgSamplePage: FC = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', 
    {
      next: {
        revalidate: 10
      }
    }
  );
  const users:User[] = await response.json();

  return (
    <div
      className='mx-4'
    >
      <p className='text-lg'>
        This is ISR(Incremental Static Regeneration) Page.
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
export default SsgSamplePage;
