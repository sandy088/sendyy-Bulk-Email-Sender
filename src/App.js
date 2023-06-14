
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import { SignupPage } from './components/Homepage/SignupPage';

function App() {
  return (
    <div className="App overflow-x-hidden">
       
       <Routes>
         <Route path='/' element={<Homepage/>}/>
         <Route path='/signup' element={<SignupPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
