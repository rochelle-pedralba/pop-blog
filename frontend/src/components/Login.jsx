import { Link } from "react-router-dom";

export default  function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(Object.fromEntries(formData));
    };

    return (
        <div className="login-page">
            <form method="POST" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label htmlFor="email"> Email</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="password"> Password</label>
                <input type="password" id="password" name="password" required/>

                <input className="submit" type="submit" value="Login" />
            </form>
            <p>No Account yet? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}