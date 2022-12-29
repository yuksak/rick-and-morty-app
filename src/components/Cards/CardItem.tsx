import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { HiArrowRight } from 'react-icons/hi';
import { ICharacter } from 'store/slices/characterSlice';
import { Button } from 'components/Button';

export const CardItem: FC<ICharacter> = (props) => {
  const id = props.id.toString();
  const navigate = useNavigate();

  return (
    <div className="relative rounded-lg border overflow-hidden bg-white border-secondary-lightest dark:bg-secondary-darker dark:border-secondary">
      <Link to={id} className="block w-full relative h-48">
        <img className="w-96 h-full object-cover" src={props.image} alt="image" />
        <div className="w-full absolute top-0 h-full object-cover bg-gradient-to-r from-secondary-darkest opacity-80" />
      </Link>
      <div className="p-5 absolute items-center bottom-0 bg-gradient-to- from-secondary-darkest w-full transition-all ease-in duration-100 ">
        <Link to={id}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{props.name}</h5>
        </Link>
        <Button onClick={() => navigate(id)} classes="text-xs opacity-90 text-white border">
          Read more
          <HiArrowRight className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </div>
  );
};
