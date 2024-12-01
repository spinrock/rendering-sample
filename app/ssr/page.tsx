import type { FC } from 'react';

type User = {
  id: string;
  username: string;
}

const SsrSamplePage: FC = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users:User[] = await response.json();
  console.info('SSR: fetch user data')
  console.info(users);

  return (
    <div
      className='mx-4'
    >
      <p className='text-lg'>
        This is SSR(Server Side Rendering) Page.
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
export default SsrSamplePage;
