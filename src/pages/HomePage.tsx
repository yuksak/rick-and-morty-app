import React from 'react';
import { useAppSelector } from 'hooks/redux-hooks';
import { CardsList, Pagination, Searcher, SpinnerAlert } from 'components';

export const HomePage = () => {
  const { status, info } = useAppSelector((state) => state.characters);

  return (
    <div className="container mx-auto">
      <Searcher />
      {status === 'Fulfilled' ? (
        <>
          <CardsList />
          {info.pages > 1 && <Pagination />}
        </>
      ) : (
        <SpinnerAlert />
      )}
    </div>
  );
};
