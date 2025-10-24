import app_logo from "../assets/sharenlearn.png"
import user from "../assets/user.svg"

export default function PublicHeader() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={app_logo} alt="application logo" />
                <p>SNL</p>
            </div>

            <div className="page-container">
                <a>Home</a>
                <a>Articles</a>
                <a>About</a>
            </div>

            <div className="login-container">
                <img src={user} alt="user icon" />
                <a>Login</a>
            </div>
        </header>
    )
}