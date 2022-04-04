import React from "react";
import "./style/Winning.css";
import  cupon  from '../assets/cupon.png'

const Winning = () => {
    return (
        <div className="WinBox">
         <h1>Congratulations !!</h1>
         <div className="winPrize">
            <img  className="" src={cupon} alt="logo" />
         </div>

         <h2 className="questionHeading">Please answer the following question in order to earn coins</h2>
         
         <div className="question">
            <h2>Q: What is 2 + 2 ?</h2>
            <input placeholder="Your Answer"></input>
            <button className="startBtn">Claim Prize</button>
         </div>
        </div>
    )
}

export default Winning;
