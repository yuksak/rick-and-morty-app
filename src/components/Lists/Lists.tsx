import React, { FC } from 'react';
import { ECharacter, ICharacter } from 'store/slices';
import { ListItem } from './ListItem';

export const Lists: FC<ICharacter> = ({
  name,
  status,
  species,
  gender,
  origin,
  location,
  created,
  image,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <div>
        <img src={image} className="max-w-lg w-full sm:w-default h-auto rounded-lg" />
      </div>
      <dl className="w-full px-5 text-secondary-darkest divide-y divide-secondary-lightest dark:text-white dark:divide-secondary-dark">
        <ListItem title={ECharacter.name} info={name} />
        <ListItem title={ECharacter.status} info={status} />
        <ListItem title={ECharacter.species} info={species} />
        <ListItem title={ECharacter.gender} info={gender} />
        <ListItem title={ECharacter.origin} info={origin.name} />
        <ListItem title={ECharacter.location} info={location.name} />
        <ListItem title={ECharacter.created} info={new Date(created).toDateString()} />
      </dl>
    </div>
  );
};
