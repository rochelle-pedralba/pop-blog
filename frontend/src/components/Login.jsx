import { Link } from "react-router-dom";
import axios from "axios";

export default  function Login() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await axios.post('http://localhost:8080/api/auth/login', data);
            console.log('Success:', res.data);
        } catch (err) {
            console.error('Error:', err.response?.data || err.message);
        }
    };


    return (
        <div className="login-page">
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