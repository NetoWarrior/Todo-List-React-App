import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

export default function Signup() {
    let history = useHistory();

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleUsername(event){
        console.log(event)
        setUsername(event.target.value)
    }

    function handleEmail(event){
        console.log(event)
        setEmail(event.target.value)
    }

    function handlePassword(event){
        console.log(event)
        setPassword(event.target.value)
    }

    function handleSubmit(event){
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password",password);
        event.preventDefault();
        history.push('/home');
    }

    return (
        <div className="blue-background">
            <div className="container">
                <h1>Sign Up</h1>
                <form className="login-form">
                    
                <div className="form-group">
                <label className="custom-field">
                    <input 
                        onChange={handleUsername}
                        type="text"
                        value={username}
                        required 
                    />
                    <span className="placeholder">Username</span>
                </label>
                </div>
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
                    <label >I accept the terms & conditions </label>
                </div>
                </div>
                    <button onClick={handleSubmit} className="btn-login" >Sign Up</button>
                </form>
            </div>
        </div>
    )
}
