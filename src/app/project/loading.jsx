import React from 'react'
import { PulseLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <PulseLoader className="min-w-16" color="#46a1e2" />
    </div>
  );
}

export default Loading 