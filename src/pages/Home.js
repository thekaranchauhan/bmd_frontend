import  prizeImage  from '../assets/prize.png'
import './style/Home.css'
import {useNavigate} from 'react-router-dom';
import  coinImage  from '../assets/coin.png'
import confetti from '../assets/confetti.png'
import sponsor1 from '../assets/sponsor-1.png'
import sponsor2 from '../assets/sponsor-2.png'
import sponsor3 from '../assets/sponsor-3.png'


export const Home = () => {
   const navigate = useNavigate();
   function handleClick(){
      navigate('/term&conditions');
   }
   return (
      <>
         <section className="intro-box row">
            <div className="col s7">
               <h1>Jackpot of your Hunger</h1>
               <h3>
                  Play and win prizes up to
                  $10,000 Buy More Dollars
               </h3>

               {/* Timer */}
               <article className="timerBox">
                  <div>
                     <h2>07: 05: 31</h2>
                     <div className="timerNames">
                        <h5>DAYS</h5>
                        <h5>HRS</h5>
                        <h5>MINS</h5>
                     </div>
                  </div>
                  <div>
                     <h5>LEFT to earn points</h5>
                  </div>
               </article>

               {/* Play Now Button */}
               <button className='play-btn' onClick={handleClick}>Play Now</button>
            </div>

            {/* Prize Image */}
            <div className="col s5 prizeImage-home">
               <img  className="" src={prizeImage} alt="logo" />
            </div>
         </section>

         {/* Prize Information */}
         <section className='prizeInfo'>
            <img  className="confetti" src={confetti} alt="logo"  />
            <article className='prizes'>
               <div className='coinImage'>
                  <img  className="logo" src={coinImage} alt="logo"  />
               </div>
               <article className="ammountBox">
                  <div className='prize'>
                     <h4>Win Up to</h4>
                     <h1>$10,000</h1>
                     <h3>BuyMore Dollars</h3>
                  </div>
               </article>
               <h3 className='cupon'>
                  Redeem your coupons and BuyMore
                  Dollar points at your favourite restaurants.
               </h3>
            </article>
         </section>

         {/* Sponsors */}
         <section className='sponsor-section'>
            <h1>Our Sponsors</h1>
            <article className='sponsors'>
               <div className="sponsor">
                  <img  className="sponsor" src={sponsor1} alt="sponsor"  />
               </div>
               <div className="sponsor">
                  <img  className="sponsor" src={sponsor2} alt="sponsor"  />
               </div>
               <div className="sponsor">
                  <img src={sponsor3} alt="sponsor"  />
               </div>
            </article>
         </section>
      </>
   );
}
