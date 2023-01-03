import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';
import { CharacterQuery, searchCharacters } from 'api';

import { FiSearch } from 'react-icons/fi';

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
    <form className="flex items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch className="w-3 h-3 sm:w-5 sm:h-5 text-secondary-light dark:text-secondary-lighter" />
        </div>
        <input
          ref={input}
          type="text"
          id="simple-search"
          className="bg-gray-50 border outline-none border-gray-300 text-secondary-darkest text-sm rounded-lg focus:border-primary-light block w-full pl-7 sm:pl-10 p-2.5  dark:bg-secondary-darker dark:border-secondary dark:placeholder-gray-400 dark:text-white dark:focus:border-secondary-lighter"
          placeholder="Search"
          required
        />
      </div>
      <button
        onClick={submitHandler}
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary-dark focus:outline-none  dark:bg-secondary-darker dark:border-secondary dark:hover:bg-secondary-darker "
      >
        <FiSearch className="w-5 h-5 " />
      </button>
    </form>
  );
};
