import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'hooks/redux-hooks';
import { Button, Lists } from 'components';
import { HiArrowLeft } from 'react-icons/hi';

export const ReadMorePage = () => {
  const navigation = useNavigate();
  const { id } = useParams();

  const { results } = useAppSelector((state) => state.characters);
  const data = results.find((result) => {
    if (id) {
      return result.id === +id;
    }
  });

  if (!data) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="container mx-auto p-2 mb-10">
      <Button classes="mb-4 mt-0 md:my-5 text-sm sm:text-md" onClick={() => navigation('/')}>
        <HiArrowLeft className="w-3 h-3 mr-1" />
        Go back
      </Button>
      <Lists {...data} />
    </div>
  );
};
