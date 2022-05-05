import { Component } from "react";
import {signUp} from '../../utilities/users-service'
import styles from '../component-css/Form.module.css'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error:''
        });
    };

    handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.confirm;
            delete formData.error;

            const user = await signUp(formData);

            this.props.setUser(user)
        }
        catch {
            this.setState({error: 'Failed to sign up. Please try again.'})
        }
    };

    render(){
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className={styles.formContainer}>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type ='text' name="name" value={this.state.name} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type ='text' name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type ='text' name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm Password</label>
                        <input type ='text' name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">{this.state.error}</p>
            </div>
        );
    }
}