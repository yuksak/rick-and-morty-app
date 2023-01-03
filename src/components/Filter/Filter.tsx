import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';
import { CharacterQuery, searchCharacters } from 'api';

const options = [
  { value: 'sort', name: 'Sort by status', selected: true },
  { value: '', name: 'All', selected: false },
  { value: 'Alive', name: 'Alive', selected: false },
  { value: 'Dead', name: 'Dead', selected: false },
  { value: 'Unknown', name: 'Unknown', selected: false },
];

export const Filter = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(searchCharacters({ query: CharacterQuery.status, queryValue: value }));
    navigate(value ? `/?${CharacterQuery.status}=${value}` : '');
  };

  return (
    <div className="w-48">
      <select
        defaultValue="sort"
        onChange={selectHandler}
        className="bg-gray-50 border h-full border-gray-300 text-secondary-darkest text-sm rounded-lg focus:border-primary-light block w-full p-2.5 dark:bg-secondary-darker dark:border-secondary dark:placeholder-secondary-light dark:text-white outline-none cursor-pointer dark:focus:border-primary-light"
      >
        {options.map(({ selected, name, value }) => (
          <option key={name} value={value} disabled={selected}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
