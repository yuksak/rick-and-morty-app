import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

import { getAllCharacters } from 'api';
import { CardsList, Searcher, SpinnerAlert } from 'components';

export const HomePage = () => {
  const { status } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  return (
    <div className="container mx-auto">
      <Searcher />
      {status === 'Fulfilled' ? <CardsList /> : <SpinnerAlert />}
    </div>
  );
};
