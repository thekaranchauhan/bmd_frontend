import React from 'react'
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import "./style/Login.css";

const Login = () => {

   const navigate = useNavigate();
 
   function handleClick(e){
      e.preventDefault();
      navigate('/MatchGame');
   }
   return (
      <>
         <form className="login-form" onSubmit={handleClick}>
            <h2 className="formHeading">Login to Play</h2>
            <section class="user-name">
                  <div className="font-user">
                     <label for="userName">USERNAME</label>
                     <input name="userName" type="text" id="userName" className="input-login" />
                     <i class="fa fa-user fa-lg"></i>
                  </div>
            </section>
            <section class="password">
                  <div className="font-user">
                     <label for="pwd">PASSWORD</label>
                     <input type="password" name="pwd" className="input-login"id="pwd" />
                     <i class="fa fa-lock fa-lg"></i>
                  </div>
            </section>
            <p className="forgot-password">
            <Link to="terms">Forgot Password?</Link>
            </p>
            <article className='agreementSection'>
               <p>
                  By continuing, you agree to the<Link to="terms"> Terms of Use and Privacy Policy.</Link>
               </p>
               <input type="submit" id="submit" class="submit-btn" value="Login"></input>
            </article>
         </form>
      </>
   )
   };
   
   export default Login;