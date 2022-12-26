import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { HiArrowRight } from 'react-icons/hi';
import { ICharacter } from 'store/slices/characterSlice';

export const CardItem: FC<ICharacter> = (props) => {
  const id = props.id.toString();

  return (
    <div className="relative rounded-lg border overflow-hidden bg-white border-secondary-lightest dark:bg-secondary-darker dark:border-secondary">
      <Link to={id} className="block w-full relative h-48">
        <img className="w-96 h-full object-cover" src={props.image} alt="image" />
        <div className="w-full absolute top-0 h-full object-cover bg-gradient-to-t from-secondary-darkest" />
      </Link>
      <div className="p-5 absolute items-center bottom-0 bg-gradient-to- from-secondary-darkest w-full transition-all ease-in duration-100 ">
        <Link to={id}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{props.name}</h5>
        </Link>
        <Link
          to={id}
          className="inline-flex items-center px-2 py-1 text-xs font-medium text-center rounded-lg text-white bg-primary hover:bg-gradient-to-br from-primary-light to-primary focus:outline-none dark:bg-secondary"
        >
          Read more
          <HiArrowRight className="w-3 h-3 ml-1" />
        </Link>
      </div>
    </div>
  );
};
