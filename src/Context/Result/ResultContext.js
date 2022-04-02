import { createContext, useReducer, useState } from 'react';
import resultReducer from './ResultReducer';
const ResultContext = createContext();

const initialState = {
  result: [],
  isLoading: false,
  searchTerm: '',
};

export const ResultProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resultReducer, initialState);

  return (
    <ResultContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContext;
