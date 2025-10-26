import {Link} from "react-router-dom";

export default function SignUp() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(Object.fromEntries(formData));
    };

    return (
        <div className="signup-page">
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="username"> Email</label>
                <input type="username" id="username" name="username" required/>

                <label htmlFor="password"> Password</label>
                <input type="password" id="password" name="password" required/>

                <label htmlFor="retype_password">Confirm Password</label>
                <input type="retype_password" id="retype_password" name="retype_password" required/>

                <input type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}