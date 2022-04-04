import React from 'react';
import { Navigate, Route, Routes as Routess } from 'react-router-dom';
import Result from './Layout/Result';

function Routes() {
  return (
    <div className='p-4'>
      <Routess>
        <Route path='/' element={<Navigate to='/search' />} />
        <Route path='/search' element={<Result />} />
        <Route path='/image' element={<Result />} />
        <Route path='/news' element={<Result />} />
        <Route path='/videos' element={<Result />} />
      </Routess>
    </div>
  );
}

export default Routes;
