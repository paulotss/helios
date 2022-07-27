import { useState } from 'react';

const useFormController = (initialState) => {

  const [input, setInput] = useState(initialState);

  const updateState = ({ target: { name, value } }) => {
    setInput((state) => ({
      ...state,
      [name]: value,
    }));
  }

  return [input, updateState];

}

export default useFormController;
