import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import ResultContext from '../../../Context/Result/ResultContext';
import { getResult } from '../../../Context/Result/ResultActions';
import Spinner from '../../Common/Spinner';
import ResultSearch from './ResultSearch';
import ResultImage from './ResultImage';
import ResultNews from './ResultNews';
import ResultVideos from './ResultVideos';

function Result() {
  const { result, isLoading, dispatch, searchTerm } = useContext(ResultContext);
  const location = useLocation();

  useEffect(() => {
    const fetchResult = async () => {
      if (searchTerm !== '') {
        if (location.pathname === '/videos') {
          dispatch({ type: 'SET_LOADING' });
          const data = await getResult(`/search/q=${searchTerm} videos `);
          dispatch({ type: 'GET_RESULT', payload: data });
          console.log(data);
        } else {
          dispatch({ type: 'SET_LOADING' });
          const data = await getResult(
            `${location.pathname}/q=${searchTerm}&num=40`
          );
          dispatch({ type: 'GET_RESULT', payload: data });
          console.log(data);
        }
      }
    };
    fetchResult();
  }, [location.pathname, searchTerm]);

  if (isLoading) return <Spinner />;

  switch (location.pathname) {
    case '/search':
      return <ResultSearch result={result} />;
    case '/image':
      return <ResultImage result={result} />;
    case '/news':
      return <ResultNews result={result} />;
    case '/videos':
      return <ResultVideos result={result} />;
  }
}

export default Result;
