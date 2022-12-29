import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';
import { CharacterQuery, searchCharacters } from 'api';

import { FiSearch } from 'react-icons/fi';
import { Button } from 'components/Button';

export const Searcher = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const input = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = input.current?.value;

    dispatch(
      searchCharacters({
        query: CharacterQuery.name,
        queryValue: value ? value : '',
      })
    );
    navigate(value ? `/?${CharacterQuery.name}=${value}` : '');
  };

  return (
    <form className="my-5 max-w-sm mx-2 sm:mx-0 relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FiSearch className="w-5 h-5 text-secondary-light dark:text-secondary-lighter" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block outline-none rounded-lg w-full p-2 sm:p-4 pl-10 sm:pl-10 text-sm text-secondary-darkest border border-secondary-lightest round focus:border-primary dark:bg-secondary-dark dark:border-secondary dark:placeholder-secondary-lighter dark:text-white dark:focus:border-primary"
        placeholder="Search"
        ref={input}
        required
      />
      <Button
        onClick={submitHandler}
        classes={'absolute right-1 sm:right-2 bottom-1 sm:bottom-2.5'}
      >
        Search
      </Button>
    </form>
  );
};
