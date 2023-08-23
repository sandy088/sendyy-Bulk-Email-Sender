
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
import { SendMail } from './components/Dashboard/SendMail';
import { Pricing } from './Pages/Pricing';
import { ErrorFour } from './Pages/NotFound';
import { SignUpThree } from './Pages/Signup';
import AdminRoute from './components/Auth/AdminRoute';
import { Admin } from './Pages/Admin/Admin';
import { Stats } from './Pages/Admin/Stats';
import { Statsdash } from './components/Dashboard/Statsdash';
import { Users } from './Pages/Admin/Users';
import { TopUsers } from './Pages/Admin/TopUsers';


function App() {
  return (
    <div className="App overflow-x-hidden bg-[#101728] overflow-y-scroll h-screen">
      <Navbar />

        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* <Route path='/signup' element={<AuthPage isLogin={false}/>} /> */}
          <Route path='/signup' element={<SignUpThree/>} />
          {/* <Route path='/login' element={<AuthPage isLogin={true}/>} /> */}
          <Route path='/login' element={<SignUpThree isLogin={true}/>} />
          <Route element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }>
            <Route path='dashboard/stats' element={<Statsdash/>}/>
            <Route path='dashboard/setupsmtp' element={<SetupSmtp/>}/>
            <Route path='dashboard/create-email-list' element={<CreateEmailList/>}/>
            <Route path='dashboard/emails-list' element={<EmailsList/>}/>
            <Route path='dashboard/send-mail' element={<SendMail/>}/>
          </Route>


          <Route element={
            <AdminRoute>
              <Admin/>
            </AdminRoute>
          }>

            <Route path='admin/stats' element={<Stats/>}></Route>
            <Route path='admin/users' element={<Users/>}></Route>
            <Route path='admin/top-users' element={<TopUsers/>}></Route>

          </Route>

          <Route path='/pricing' element={<Pricing/>}/>

          <Route path='*' element={<ErrorFour/>}/>
        </Routes>

        

    </div>
  );
}

export default App;
