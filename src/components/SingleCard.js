import './style/SingleCard.css'
import  coinImage  from '../assets/coin.png'

export default function SingleCard({ card, handlePick, cardFlipped, disabled }) { 

    const handleClick = () => {
        if (!disabled) {
            handlePick(card);
        }
    }

    return (
        <div className="card">
            <div className={cardFlipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="Card front" />
                <img
                    className="back" 
                    src={coinImage}
                    onClick={handleClick}
                    alt="Card back"
                />
            </div>
        </div>
    )
}
