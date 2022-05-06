import {useState} from 'react'
import styles from '../component-css/Form.module.css'
import * as usersService from '../../utilities/users-service'
import { useNavigate } from "react-router-dom";

export default function LoginForm (){
    const [authentication, setAuthentication] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

function handleChange(evt) {
  setAuthentication({ ...authentication, [evt.target.name]: evt.target.value });
  setError('');
}
const navigate = useNavigate();

async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(authentication);
      navigate('/home')
    } catch {
      setError('Log In Failed - Try Again');
    }
  }
  return (
    <div>
      <div className={styles.formContainer}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={authentication.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={authentication.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
  }