import React from 'react';

function ResultSearch({ result }) {
  return (
    <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
      {result?.map((item, index) => (
        <div key={index} className='md:w-2/5 w-full'>
          <a href={item.link} target='_blank' rel='noreferrer'>
            <p className='text-sm'>
              {item.link.length > 30 ? item.link.substring(0, 30) : item.link}
            </p>
            <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
              {item.title}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ResultSearch;
