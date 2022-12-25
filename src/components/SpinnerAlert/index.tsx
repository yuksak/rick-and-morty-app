import React from 'react';
import { useAppSelector } from 'hooks/redux-hooks';

import { CgSpinner } from 'react-icons/cg';
import { MdSmsFailed } from 'react-icons/md';

export const SpinnerAlert = () => {
  const { status } = useAppSelector((state) => state.characters);

  return (
    <div className="text-center">
      {status === 'Rejected' ? (
        <p className="text-zinc-900 dark:text-white flex items-center justify-center">
          <MdSmsFailed className="mr-2 w-8 h-8 animate-pulse fill-red-500" />
          Something went wrong.
        </p>
      ) : (
        <CgSpinner className="inline mr-2 w-8 h-8 text-blue-500 animate-spin dark:text-zinc-600 fill-zinc-600" />
      )}
    </div>
  );
};
