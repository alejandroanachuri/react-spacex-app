import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import Capsules from './components/Capsules';
import Missions from './components/Missions';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Routes>
          
          <Route path='/' element={<Dashboard/>} />
          <Route path='/capsules' element={<Capsules/>} />
          <Route path='/missions' element={<Missions/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
