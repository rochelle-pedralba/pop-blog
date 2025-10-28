import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SignUp() {

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
            await axios.post('http://localhost:8080/api/auth/signup', data);
            setMessage({text: "Sign up successful", background: "#8EFF4DFF", color: "#1c2d10"});
            setIsSubmitted(true);
        } catch (err) {
            setMessage({text: err.response?.data || err.message, background: "rgba(255,69,36,0.55)", color: "#5e0d00"});
            setIsSubmitted(true);
        }
    };


    return (
        <div className="signup-page">

            {isSubmitted ?
                <div className="signup-message" style={{backgroundColor: message.background}}>
                    <p style={{textColor: message.color}}>{message.text}</p>
                </div>
            : null}

            <form method="POST" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <label htmlFor="email"> Email:</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="username"> Username:</label>
                <input type="username" id="username" name="username" required/>

                <label htmlFor="password"> Password:</label>
                <input type="password" id="password" name="password" required/>

                <label htmlFor="retype_password">Confirm Password:</label>
                <input type="password" id="retype_password" name="retype_password" required/>

                <input className="submit" type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}