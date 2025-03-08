'use client';

import { useRouter } from 'next/navigation';

function ErrorPage404() {
  const goHome = () => {
    router.push('/');
  };
  const router = useRouter();
  return (
    <div>
      <h1>Hi! It is an Error Page</h1>
      <h2>Something went wrong</h2>
      <button onClick={goHome}>Go home</button>
    </div>
  );
}

export default ErrorPage404;
