import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { CharacterQuery, searchCharacters } from 'api';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Button } from 'components/Button';

export const Pagination = () => {
  const { prev, next, pages, count } = useAppSelector((state) => state.characters.info);
  const dispatch = useAppDispatch();
  const { search } = useLocation();

  const showData = {
    from: prev ? prev * 20 : 1,
    to: next ? next * 20 - 20 : count,
  };

  const paginator = (value: string) => {
    const queryValue = value === 'next' ? next : prev;
    dispatch(searchCharacters({ query: CharacterQuery.page, queryValue, oldQueryValue: search }));
  };

  const spanClasses = 'font-semibold text-secondary-darkest dark:text-white';
  return (
    <div className="flex flex-col items-center my-10">
      <span className="text-xs text-secondary-light dark:text-secondary-light">
        Showing <span className={spanClasses}>{showData.from}</span> to{' '}
        <span className={spanClasses}>{showData.to}</span> of{' '}
        <span className={spanClasses}>{count}</span> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <Button disabled={!prev} onClick={() => paginator('prev')} classes={'rounded-r-none'}>
          <FiArrowLeft />
        </Button>
        <Button classes={'cursor-default border-x rounded-none'}>
          {prev ? prev + 1 : next - 1} / {pages}
        </Button>
        <Button disabled={!next} onClick={() => paginator('next')} classes={'rounded-l-none'}>
          <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};
