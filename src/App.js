
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import {AuthPage}from './Pages/SignupPage';
import { Navbar } from './components/common/Navbar';
import  PrivateRoute  from './components/Auth/PrivateRoute';
import { Dashboard } from './Pages/Dashboard';
import { SetupSmtp } from './components/Dashboard/SetupSmtp';
import { CreateEmailList } from './components/Dashboard/CreateEmailList';
import { EmailsList } from './components/Dashboard/EmailsList';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<AuthPage isLogin={false}/>} />
          <Route path='/login' element={<AuthPage isLogin={true}/>} />
          <Route element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }>


            <Route path='dashboard/setupsmtp' element={<SetupSmtp/>}/>
            <Route path='dashboard/create-email-list' element={<CreateEmailList/>}/>
            <Route path='dashboard/emails-list' element={<EmailsList/>}/>
          </Route>
        </Routes>

        

    </div>
  );
}

export default App;
