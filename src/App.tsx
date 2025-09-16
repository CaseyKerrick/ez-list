import Listing from './components/Listing/Listing';
import Settings from './components/Settings/Settings';
import './App.css';
import React from 'react';

function App() {

  const [currentPage, setCurrentPage] = React.useState('App');

  const changePage = (page: string) => () => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="navbar">
        <div className={`navItem ${currentPage === 'App' && 'currentNavItem'}`} onClick={changePage('App')}>App</div>
        <div className={`navItem ${currentPage === 'Settings' && 'currentNavItem'}`} onClick={changePage('Settings')}>Settings</div>
      </div>
      <div className="appContainer">
        { currentPage === 'App' && <Listing /> }
        { currentPage === 'Settings' && <Settings /> }
      </div>
    </>
  );
}

export default App;
