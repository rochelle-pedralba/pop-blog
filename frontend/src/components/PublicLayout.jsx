import PublicHeader from "./PublicHeader.jsx";
import image from "../assets/suga.jpg"
import user from "../assets/user.svg"
import time from "../assets/time.png"

export  default function PublicLayout() {
    return (
        <>
            <PublicHeader/>
            <div className="feature-post">
                <div className="overview">
                    <h4>Featured Post</h4>
                    <h1>BTS Suga Routine when composing songs</h1>
                    <h2>Know more about Suga</h2>
                    <div className="details">
                        <div className="author">
                            <img src={user} alt="user" />
                            <p>Rochelle Ann</p>
                        </div>
                        <div className="date-posted">
                            <img src={time} alt="time" />
                            <p>8 min read</p>
                        </div>
                        <p>
                            Oct 20, 2025
                        </p>
                    </div>
                </div>
                <img src={image} />
            </div>
        </>
    )
}