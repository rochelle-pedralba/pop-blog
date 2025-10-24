import logo from "../assets/react.svg"

export default function PublicHeader() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="react logo" />
                <p>Share and Learn</p>
            </div>

            <div className="page-container">
                <a>Home</a>
                <a>Articles</a>
                <a>About</a>
            </div>

            <div className="login-container">
                <img src={logo} alt="react logo" />
                <a>Login</a>
            </div>
        </header>
    )
}