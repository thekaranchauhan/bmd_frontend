import { useEffect, useState } from 'react';
import './style/Game.css';
import SingleCard from './SingleCard';
import { useNavigate } from 'react-router-dom';

// array of card images
const cardImages = [
   { "src": "../assets/image1.png", matched: false },
   { "src": "../assets/image2.png", matched: false },
   { "src": "../assets/image3.png", matched: false },
   { "src": "../assets/image4.png", matched: false },
   { "src": "../assets/image5.png", matched: false },
]

function Game() {

   const navigate = useNavigate();

   function handleClick() {
      navigate('/Win');
   }

   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0);
   const [PickOne, setPickOne] = useState(null);
   const [PickTwo, setPickTwo] = useState(null);
   const [disabled, setDisabled] = useState(false);

   // Mapping cards and if user plays after 48 hours the cards will be reset
   const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]      // 2 lots of card images
         .sort(() => Math.random() - 0.5)                        // shuffled array
         .map((card) => ({ ...card, id: Math.random() }))        // add on random ID number to each card

      setPickOne(null);
      setPickTwo(null);
      setCards(shuffledCards);
      setTurns(0);
   }

   // handle a user Pick, update Pick one or two
   const handlePick = (card) => {
      PickOne ? setPickTwo(card) : setPickOne(card)        // if PickOne is null (is false), update with setPickOne, else update PickTwo with setPickTwo
   }
   useEffect(() => {
      shuffleCards()
   }, [])

   // compare two selected cards
   useEffect(() => {
      if (PickOne && PickTwo) {
         setDisabled(true);
         if (PickOne.src === PickTwo.src) {
            setCards(prevCards => {
               return prevCards.map((card) => {
                  if (card.src === PickOne.src) {
                     return { ...card, matched: true }
                  } else {
                     return card;
                  }
               })
            })
            resetTurn();
         } else {
            setTimeout(() => resetTurn(), 1000);
         }
      }
   }, [PickOne, PickTwo])

   // reset Picks and increase number of turns
   const resetTurn = () => {
      setPickOne(null);
      setPickTwo(null);
      setTurns(prevTurns => prevTurns + 1);
      setDisabled(false);
   }

   return (
      <section className="game">
         <article className='scoreboard'>
            <div>
               <p>Turns: <span>{turns}</span></p>
            </div>
            <div>
               <p>Time Left: <span>7 sec</span></p>
            </div>
         </article>

         <article className="card-grid">
            {cards.map((card) => (
               <SingleCard
                  key={card.id}
                  card={card}
                  handlePick={handlePick}
                  cardFlipped={card === PickOne || card === PickTwo || card.matched}
                  disabled={disabled}
               />
            ))}
         </article>

         <article className='buttons'>
            <button className='startBtn'>Start Game</button>
            <button className='prizeBtn' onClick={handleClick}>Claim Prize</button>
         </article>
      </section>
   );
}

export default Game;