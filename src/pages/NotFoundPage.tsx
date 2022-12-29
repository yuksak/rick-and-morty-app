import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { HiHome } from 'react-icons/hi';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-2 text-secondary-darkest dark:text-white">
      <h2 className="text-5xl font-bold bold py-2">
        Don't know <br />
        where you are?
      </h2>
      <p className="mb-5">We really have no idea either...</p>
      <Button onClick={() => navigate('/')} classes="uppercase">
        <HiHome className="mr-2" />
        Back to home page
      </Button>
    </div>
  );
};
