import { Link } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default  function Login() {

    let [ message, setMessage ] = useState({});
    let [ isSubmitted, setIsSubmitted ] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSubmitted(false);
        }, 2500)

        return () => clearTimeout(timer);
    }, [isSubmitted]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await axios.post('http://localhost:8080/api/auth/login', data);
            setMessage({text: "Login successful", background: "#8EFF4DFF", color: "#1c2d10"});
            setIsSubmitted(true);
        } catch (err) {
            setMessage({text: err.response?.data || err.message, background: "rgba(255,69,36,0.55)", color: "#5e0d00"});
            setIsSubmitted(true);
        }
    };

    return (
        <div className="login-page">

            {isSubmitted ?
                <div className="login-message" style={{backgroundColor: message.background}}>
                    <p style={{textColor: message.color}}>{message.text}</p>
                </div>
            : null}

            <form method="POST" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label htmlFor="username"> Username:</label>
                <input type="username" id="username" name="username" required/>

                <label htmlFor="password"> Password:</label>
                <input type="password" id="password" name="password" required/>

                <input className="submit" type="submit" value="Login" />
            </form>
            <p>No Account yet? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}