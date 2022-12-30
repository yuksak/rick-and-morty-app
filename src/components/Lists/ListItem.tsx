import React, { FC } from 'react';

interface IListItemProps {
  title: string;
  info: string;
}

export const ListItem: FC<IListItemProps> = ({ title, info }) => {
  return (
    <div className="flex flex-col pt-3">
      <dt className="mb-1 text-secondary-light text-xs md:text-lg dark:text-secondary-lighter">
        {title}
      </dt>
      <dd className="text-sm md:text-lg font-semibold">{info}</dd>
    </div>
  );
};
