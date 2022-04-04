import React from 'react';

function ResultNews({ result }) {
  console.log(result);
  return (
    <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
      {result?.map(({ links, id, source, title }) => (
        <div key={id} className='md:w-2/5 w-full'>
          <a
            href={links?.[0].href}
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
          >
            <p className='text-lg  dark:text-blue-300 text-blue-700'>{title}</p>
          </a>
          <div className='flex gap-4'>
            <a href={source?.href} target='_blank' rel='noreferrer'>
              {source?.href}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultNews;
