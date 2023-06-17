
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import {SignupPage }from './Pages/SignupPage';
import { Navbar } from './components/common/Navbar';
import  PrivateRoute  from './components/Auth/PrivateRoute';
import { Dashboard } from './Pages/Dashboard';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<SignupPage isLogin={false}/>} />
          <Route path='/login' element={<SignupPage isLogin={true}/>} />
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>
        </Routes>

        

    </div>
  );
}

export default App;
