import React from 'react';
import PropTypes from 'prop-types';
import { ContainerMain } from './Container.styled';

 const Container = ({ children }) => {
  return <ContainerMain>{children}</ContainerMain>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;