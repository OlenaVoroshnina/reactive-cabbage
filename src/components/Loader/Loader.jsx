import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
        colors={['#f33b47', '#f47e60', '#f79c42', '#a0c251', '#64e074']}
      />
    </Spinner>
  );
};
