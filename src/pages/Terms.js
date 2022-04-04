import "./style/Term.css";
import {useNavigate} from 'react-router-dom';

export const Terms = () => {
   const navigate = useNavigate();
 
   function handleClick(e){
      e.preventDefault();
      navigate('/registration');
   }
	return (
		<div>
			<h1>Terms & Conditions</h1>
         <div className="terms-page">
            <p>
               Read this document carefully. Here are the conditions that govern contracting the activation of promotions and contests through an BUYMORE DOLLARS application, the rights and obligations of both parties, the information regarding the buying process and the conditions of use
            </p>
            <p>
               Kindly note that these General Conditions consent to the arrangements of the current regulation regarding the matter.
            </p>
            <h3>ACCEPTANCE AND VALIDITY OF THE GENERAL CONDITIONS</h3>
            <p>
               These General Conditions are restricting for the two players. The CLIENT will be attached to every last one of these General Conditions regardless after getting a BUYMORE DOLLARS application, it being their commitment and obligation to peruse them already.
            </p>
            <p>
               Throughout your request, before approving installment, the CLIENT should acknowledge these General Conditions. On the off chance that you are not happy with them, don't continue with the contracting system, considering that such circumstances will be appropriate in all cases.
            </p>
            <p>
               This agreement will be restricting and will stay legitimate for the period of time that your advancement is dynamic. This isn't enduring the obligations that the CLIENT might cause from utilizing the application.
            </p>

            <h3>Terms & Conditions:</h3>
            <li>
               BuyMore Dollars just purposes subtleties of its clients to work with the effective activity of the advancements. BuyMore Dollars will NEVER use subtleties of enlisted clients for some other explanation.
            </li>
            <li>
               BuyMore Dollars can't be considered liable for the awards, items or administrations proposed to clients through the advancements.
            </li>
            <li>
               BuyMore Dollars offers the CLIENT the opportunity, assuming they want it, to involve a stage for haphazardly choosing advancement champs. This framework permits you to pick the champs as well as substitutes of an advancement. 
            </li>
            <li>
               By no means would BuyMore Dollars be able to be considered answerable for any abuse of, or breakdown connecting with, the stage for producing arbitrary award draws.
            </li>
            <li>
               By no means will BuyMore Dollars remove part in the conveying from an award draw. Rather it places at the removal of the CLIENT an instrument for producing arbitrary blends, as made sense of in this record.
            </li>
            <li>
               BuyMore Dollars maintains whatever authority is needed to unpublish and erase any advancement whenever. The advancement head will be told ahead of time. On the off chance that the person in question doesn't answer in the span of 24 hours, the advancement will be unpublished.
            </li>
            <li>
               BuyMore Dollars won't discount the cost of an advancement or plan whenever it has been paid.
            </li>
            <li>
               The advancement manager is liable for following Facebook, Instagram, Twitter and Google's advancement rules, and for adjusting to the current regulation in the nations and additionally domains impacted by said advancement or challenge.
            </li>
            <li>
               The advancement director is liable for the substance and running of said advancement.
            </li>
            <li>
               The advancement manager is liable for all the data, embedded and related, of clients who register for the advancement.
            </li>
            <li>
               The director ought to demonstrate in the advancement's Terms and Conditions or Privacy Policy what use will be made of a member's subtleties and said manager ought to get the assent of members for treatment of their own subtleties.
            </li>
            <li>
               The overseer is liable for choosing and advising the victors and for conveying the awards, items or administrations presented in the advancement.
            </li>
         </div>
         <div className="buttonss">
            <button className='startBtn' onClick={handleClick}>Agree</button>
         </div>
		</div>
	);
};
