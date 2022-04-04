import React from 'react';
import { Link } from 'react-router-dom';
import LogoLight from '../../Asset/googlelogo_color_92x30dp.png';
import LogoDark from '../../Asset/googlelogo_light_color_92x30dp.png';
import Search from '../Search';

function Navbar({ isDarkTheme, setTheme }) {
  return (
    <div className='p-5 pb-0 flex flex-wrap  sm:justify-between justify-center items-center border-b dark:border-gray-700 border-grey-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/' className='cursor-pointer'>
          <img
            src={`${isDarkTheme ? LogoDark : LogoLight}`}
            className='w-24 h-8'
            alt=''
          />
        </Link>
        <button
          onClick={() => setTheme((prev) => !prev)}
          className=' text-lg dark:bg-gray-900 y-50  dark:border-gray-700 dark:text-white bg-white border rounded-lg px-2 py-1 hover:shadow-lg '
        >
          {isDarkTheme ? 'Dark 🌛' : 'Light 🌞'}
        </button>
      </div>
      <Search />
    </div>
  );
}

export default Navbar;
