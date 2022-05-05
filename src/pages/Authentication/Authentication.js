import {useState} from 'react'
import LoginForm from '../../components/Log In/LoginForm'
import SignUpForm from '../../components/Sign Up/SignUpForm'

export default function AuthenticationPage({setUser}){
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <div>
                <h3 onClick={()=> setShowLogin(!showLogin)}>{showLogin ? "Sign Up" : "Log In"}</h3>
            </div>
            {showLogin ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser}/>}
        </main>
    )
}

