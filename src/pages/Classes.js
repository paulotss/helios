import React, { useContext, useState } from 'react';
import ClassCard from '../components/ClassCard';
import AppContext from '../context/AppContext';

const Classes = () => {
  const { classes } = useContext(AppContext);
  
  return (
    <div>
      {
        classes.map((classItem) => (
          <ClassCard
            key={ classItem.id }
            name={ classItem.name }
            id={ classItem.id }
          />
        ))
      }
    </div>
  );
}

export default Classes;
