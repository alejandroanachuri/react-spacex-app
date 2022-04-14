import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import Capsules from './components/Capsules';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Routes>
          
          <Route path='/' element={<Dashboard/>} />
          <Route path='/capsules' element={<Capsules/>} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
