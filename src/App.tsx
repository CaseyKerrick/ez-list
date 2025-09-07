import Listing from './components/Listing/Listing';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="navItem">App</div>
        <div className="navItem">Settings</div>
        </div>
      <div className="appContainer">
        <Listing />
      </div>
    </>
  );
}

export default App;
