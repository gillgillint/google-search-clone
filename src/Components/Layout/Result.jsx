import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ResultContext from '../../Context/Result/ResultContext';
import { getResult } from '../../Context/Result/ResultActions';
import Spinner from '../Common/Spinner';

function Result() {
  const { result, isLoading, dispatch } = useContext(ResultContext);
  const location = useLocation();

  console.log(location.pathname);

  if (isLoading) return <Spinner />;
  return <div>Result</div>;
}

export default Result;
