import cardData from '../cardData.json'
import user from '../assets/user.svg'
import time from '../assets/time.png'

export default function RecentPost() {

    function truncateText(text, maxLength = 120) {
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    }

    const cardElements = cardData.map((card, index) =>
        <div key={index} className="card">
            <div className='image-container'>
                <p className='category'>{card.category}</p>
                <img src={card.imageUrl} alt={card.category + " picture"} />
            </div>

            <div className='description'>
                <h3>{card.title}</h3>
                <h4>{truncateText(card.shortDescription)}</h4>
            </div>

            <div className='details'>
                <div className='author'>
                    <img src={user} />
                    <h5>{card.author}</h5>
                </div>
                <div className='reading-time'>
                    <img src={time} />
                    <h5>{card.readingTime}</h5>
                </div>
                <h5 className='published-date'>{card.datePublished}</h5>
            </div>
        </div>)

    return (
        <div className="recent-articles">
            <section className="header">
                <div className="details">
                    <h2>Recent Articles</h2>
                    <h3>Stay updated on Pop Music with our latest posts!</h3>
                </div>
                <button>
                    View All Articles
                </button>
            </section>
            <section className="content">
                {cardElements}
            </section>
        </div>
    )
}