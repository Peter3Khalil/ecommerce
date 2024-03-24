'use client';
import React, { FC } from 'react';
type Props = {
  error: Error;
  reset: () => void;
};
const Error: FC<Props> = ({ error, reset }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
