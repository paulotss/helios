import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Classes = () => {
  const { classes } = useContext(AppContext);
  
  console.log(classes);
}

export default Classes;
