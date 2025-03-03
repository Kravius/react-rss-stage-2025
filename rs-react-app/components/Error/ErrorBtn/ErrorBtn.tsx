import React, { ReactNode } from 'react';
import style from './ErrorBtn.module.css';

type ButtonProps = {
  children?: ReactNode;
};

import { useState } from 'react';

const ErrorBTN: React.FC<ButtonProps> = ({ children }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error) {
    throw new Error('Simulated error. You have some error');
  }

  return (
    <div>
      <button className={style['errorBtn']} onClick={handleError}>
        {children}
      </button>
    </div>
  );
};

export default ErrorBTN;
