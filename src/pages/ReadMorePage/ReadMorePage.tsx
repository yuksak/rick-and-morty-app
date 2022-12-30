import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'hooks/redux-hooks';
import { Button, Lists } from 'components';

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
      <Button classes="my-5" onClick={() => navigation('/')}>
        Go back
      </Button>
      <Lists {...data} />
    </div>
  );
};
