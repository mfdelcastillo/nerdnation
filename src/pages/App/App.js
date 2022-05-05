import './App.css';
import React, {useState} from 'react';
import Landing from '../Landing/Landing'
import {getUser} from '../../utilities/users-service'
import {Routes, Route} from 'react-router-dom';
import UserHome from '../UserHome/UserHome';
import SignUpForm from '../../components/Signup/SignUpForm';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ?
        <div>
          {<Routes> 
              <Route path="/home" element={<UserHome user={user} setUser={setUser}/>}/>
          </Routes> }
        </div>
      :  
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/signup' element={<SignUpForm />}/>
        </Routes>
      }
    </main> 
  )
}


