import React from 'react';

function ResultImage({ result }) {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {result?.map(({ image, link: { href, title }, index }) => (
        <a
          href={href}
          key={index}
          target='_blank'
          rel='noreferrer'
          className='sm:p-3 p-5'
        >
          <img src={image?.src} alt={title} loading='lazy' />
          <p className='w-36 break-words text-sm mt-2 '>{title}</p>
        </a>
      ))}
    </div>
  );
}

export default ResultImage;
