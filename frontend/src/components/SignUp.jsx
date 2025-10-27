import {Link} from "react-router-dom";
import axios from "axios";

export default function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await axios.post('http://localhost:8080/api/auth/signup', data);
            console.log('Success:', res.data);
        } catch (err) {
            console.error('Error:', err.response?.data || err.message);
        }
    };


    return (
        <div className="signup-page">
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