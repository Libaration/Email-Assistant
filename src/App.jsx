import SideBar from './components/SideBar.jsx';
import { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Email from './pages/Email.jsx';
import Settings from './pages/Settings.jsx';
import Search from './components/Search.jsx';
import SearchShow from './pages/SearchShow';
import Reschedule from './pages/Reschedule';
import Preview from './pages/Preview';
import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import useKeySequence from './hooks/useKeySequence';
import './index.css';

function App() {
  useKeySequence();
  const location = useLocation();
  const [page, setPage] = useState();
  const [search, setSearch] = useState('');
  const [isSearching, setSearching] = useState(false);

  return (
    <>
      <div className='flex h-[35px]'>
        <div className='bg-brand fixed pb-36 min-w-[72px]' />
        <Search setSearch={setSearch} setSearching={setSearching} location={location} />
      </div>

      <div className='flex min-h-full'>
        <SideBar setPage={setPage} className='w-64 bg-brand fixed overflow-y-auto pt-4' />
        <div className='flex-grow ml-16 pt-4'>
          <AnimatePresence mode='wait' initial={false}>
            <Outlet />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
