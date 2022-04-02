import Navbar from './Components/Layout/Navbar';
import Routes from './Components/Routes';
import Footer from './Components/Layout/Footer';
import { useState } from 'react';
import { ResultProvider } from './Context/Result/ResultContext';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ResultProvider>
      <div className={`${darkTheme ? 'dark' : ''}`}>
        <div className='bg-grey-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
          <Navbar isDarkTheme={darkTheme} setTheme={setDarkTheme} />
          <Routes />
          <Footer />
        </div>
      </div>
    </ResultProvider>
  );
}

export default App;
