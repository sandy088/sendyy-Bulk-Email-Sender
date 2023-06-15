
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import {SignupPage }from './Pages/SignupPage';
import { Navbar } from './components/common/Navbar';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>

        

    </div>
  );
}

export default App;
