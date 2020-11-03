import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

export default function Login() {
    let history = useHistory();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleEmail(event){
        console.log(event)
        setEmail(event.target.value)
    }

    function handlePassword(event){
        console.log(event)
        setPassword(event.target.value)
    }

    function handleSubmit(event){
        localStorage.setItem("email", email);
        localStorage.setItem("password",password);
        event.preventDefault();
        history.push('/home');
    }

    return (
        <div className="blue-background">
            <div className="container">
                <h1>Log In!</h1>
                <form className="login-form">
                <div className="form-group">
                    <label className="custom-field">
                    <input 
                        onChange={handleEmail}
                        type="text"
                        value={email} 
                        required
                    />
                    <span className="placeholder">Email Address</span>
                    </label>
                </div>
                <div className="form-group">
                <label className="custom-field">
                    <input 
                        onChange={handlePassword}
                        type="password"
                        value={password}

                    />
                    <span className="placeholder">Password</span>
                    </label>
                </div>
                <div class="flex-container">
                <div className="check-box">
                    <input type="checkbox"/>
                    <label >Remember Me</label>
                </div>    
                <div className="forgot-password">
                    <a href="#">Forgot Password ?</a>
                </div> 
                </div>
                              
                    
                <button onClick={handleSubmit} className="btn-login">Login</button>
                </form>
            </div>
        </div>
    )
}
