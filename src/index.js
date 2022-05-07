import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUpForm from './components/Signup/SignUpForm';
import UserHome from './pages/UserHome/UserHome';
import LoginForm from './components/Login/LoginForm';
import UserProfile from './pages/UserProfile/UserProfile';
import Landing from './pages/Landing/Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path ='/' element={<Landing/>} />
        <Route path='/signup' element={<SignUpForm/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/home' element={<UserHome/>}/>
        <Route path='/profile' element={<UserProfile />}>
          <Route path=':userid' element={<UserProfile />}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);