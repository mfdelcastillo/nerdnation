import './App.css';
import React, {useState} from 'react';
import Landing from '../Landing/Landing'
import {Routes, Route} from 'react-router-dom';
import SignUpForm from '../../components/Signup/SignUpForm';
import userHome from '../UserHome/UserHome'
import UserHome from '../UserHome/UserHome';



export default function App() {
  return (
    <main className="App">
      {
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/signup' element={<SignUpForm />}/>
          <Route path='/home' element={<UserHome/>}/>
        </Routes>
        
      }
    </main> 
  )
}


