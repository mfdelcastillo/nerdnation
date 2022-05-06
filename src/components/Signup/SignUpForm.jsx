import { useState } from "react";
import {signUp} from '../../utilities/users-service'
import styles from '../component-css/Form.module.css'
import { useNavigate } from "react-router-dom";

export default function SignUpForm () {
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

const navigate = useNavigate()

const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
        setError('')
    };


const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            delete formData.confirm;
            delete formData.error;
            const user = await signUp(formData);
            navigate('/home')
            console.log(user)
        }
        catch(error) {
            setError(error.toString())
            console.log(error)
        }
    };

        const disable = formData.password !== formData.confirm;
        return (
            <div>
                <div className={styles.formContainer}>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type ='text' name="name" value={formData.name} onChange={handleChange} required />
                        <label>Email</label>
                        <input type ='text' name="email" value={formData.email} onChange={handleChange} required />
                        <label>Password</label>
                        <input type ='text' name="password" value={formData.password} onChange={handleChange} required />
                        <label>Confirm Password</label>
                        <input type ='text' name="confirm" value={formData.confirm} onChange={handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">{error}</p>
            </div>
        );
    }