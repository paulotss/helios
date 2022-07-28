import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppContext from './context/AppContext';
import { classesData } from './helpers/classesData';
import Classes from './pages/Classes';
import Login from './pages/Login';

function App() {
  const [ classes, setClasses ] = useState(classesData);
  const contextValue = {
    classes,
    setClasses,
  };
  
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/turmas" element={
        <AppContext.Provider value={ contextValue } >
          <Classes />
        </AppContext.Provider>
      } />
    </Routes>
  );
}

export default App;
