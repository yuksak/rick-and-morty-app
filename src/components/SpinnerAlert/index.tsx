import React from 'react';
import { useAppSelector } from 'hooks/redux-hooks';

import { CgSpinner } from 'react-icons/cg';
import { MdSmsFailed } from 'react-icons/md';

export const SpinnerAlert = () => {
  const { status } = useAppSelector((state) => state.characters);

  return (
    <div className="text-center">
      {status === 'Rejected' ? (
        <p className="text-secondary-darkest text-xs md:text-base dark:text-white flex items-center justify-center">
          <MdSmsFailed className="mr-2 w-8 h-8 animate-pulse fill-danger" />
          No results found or something went wrong.
        </p>
      ) : (
        <CgSpinner className="inline mr-2 w-8 h-8 text-primary animate-spin dark:text-secondary fill-secondary" />
      )}
    </div>
  );
};
