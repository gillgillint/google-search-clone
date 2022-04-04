import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ResultContext from '../Context/Result/ResultContext';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📷 Images' },
  { url: '/videos', text: '▶ Videos' },
];

function Search() {
  const [text, setText] = useState('google');
  const { dispatch } = useContext(ResultContext);

  const handleEnter = (e) => {
    if (e.key === 'Enter' && text !== '') {
      dispatch({ type: 'SET_SEARCH_TERM', payload: text });
    }
  };

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleEnter}
        type='text'
        value={text}
        className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
      />

      {text && (
        <button
          className='absolute  top-2.5 right-4 text-lg text-gray-500'
          onClick={() => setText('')}
        >
          X
        </button>
      )}
      <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map(({ url, text }, i) => (
          <NavLink
            key={i}
            to={url}
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0'
                : 'm-2 mb-0'
            }
          >
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Search;
