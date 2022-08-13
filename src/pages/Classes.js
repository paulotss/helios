import React, { useContext } from 'react';
import ClassCard from '../components/ClassCard';
import AppContext from '../context/AppContext';

const Classes = () => {
  const { classes } = useContext(AppContext);
  
  return (
    <main className="bg-green-800 text-white h-screen">
      <header className="text-center mb-8 p-4">
        <h1 className="text-4xl font-black">Classes</h1>
      </header>
      <section className="flex flex-row flex-wrap justify-center">
        {
          classes.map((classItem) => (
            <ClassCard
              key={ classItem.id }
              name={ classItem.name }
              image={ classItem.image }
              id={ classItem.id }
            />
          ))
        }
      </section>
    </main>
  );
}

export default Classes;
