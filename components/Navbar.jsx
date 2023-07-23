import React, {useState} from 'react'

import { BrowserRouter, Route, Link } from "react-router-dom"; 


import SignInModal from './SignInModal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./SignInModal.css"

import "./Navbar.css"
import logo from "../pictures/FangLogo.png"
import logo2 from "../pictures/FangText.png"
import menu from "../pictures/Hamburger.png"

import forumIcon from "../pictures/ForumIcon.png"

import twitter from "../pictures/twitterIcon.png"
import instagram from "../pictures/igIcon.png"
import facebook from "../pictures/fbIcon.png"
import youtube from "../pictures/ytIcon.png"

import login from "../pictures/logIn.png"
import games from "../pictures/GamesIcon.png"
import news from "../pictures/newsIcon.png"
import contact from "../pictures/contactIcon.png"


export default function Navbar() {

  const [show, setShow] = useState(true);

  function handleClick() {

    setShow(!show);
   
}


  return (
    <>
        <nav className="navbar n1">
                    
                    <section className="logonavsec">
                        <Link to="/moonfang/"><img src={logo} alt="" className='logo logo1'/></Link>
                        
                    </section>
                    
                    
                    <section className="navsection">
                            
                            <Link to="/gamenews">NEWS</Link>
                            <Link to="/baldursgate3"> BALDUR'S GATE III</Link>
                            <Link to="/diablo4"> DIABLO IV</Link>
                            <Link to="/diablo2">DIABLO II</Link>
                            <Link to="/eldenring">ELDEN RING</Link>
                            <Link to="/forums">FORUMS</Link>
                            {/*<img src={forumIcon} alt="" className='forumicon'/> */}
                            
                            
                        
                    </section> 
                    <section className="smallnavsec">
                      <section className="navSocials">
                        <a ><img src={twitter} className='navImg' alt="" /></a>
                        <a ><img src={instagram} className='navImg' alt="" /></a>
                        <a ><img src={facebook} className='navImg' alt="" /></a>
                        <a ><img src={youtube} className='navImg' alt="" /></a>
                      </section>
                    </section>
                    
        </nav>
        <nav className="navbar n2">
                <section class="smallnavsec">
                    

                </section>
                
                <section className="navsection">
                    
                    <a >HOME</a>
                    <a >BEGINNER GUIDES</a>
                    <a >BUILD GUIDES</a>
                    <a >ITEMS</a>
                    

                </section>
                <section className="signInSec">
                  {/*
                    <a href="">SIGN IN</a>
                    <a href="">SIGN UP</a>

                  */}
                </section>
          </nav>

                 
          <nav className="mobilenav" style={{position: show ? "sticky" : "fixed"}}>
            <section className='mobileNavSec1'> 
              <img src={logo} alt="" className='mobileLogo1'/>
              <img src={logo2} alt="" className='mobileLogo2'/> 
            </section>
            <section className='mobileNavSec2'>
              <img src={menu} onClick={() => handleClick()} className='mobileMenuIcon'/>
            </section>
          </nav>

          {!show ?       
          <div className='mobileMenu'>
            <section className='mobileMenuSec0'></section> 
            <section className='mobileMenuSec1'>
                <form>
                  <input type="text"/> 
                  <button disabled type="submit"><p>Search</p></button>
                </form>
            </section>
            <section className='mobileMenuSec2'>
              <Popup contentStyle={{width: "320px"}} trigger={<a><img src={login} className='mobileIcon' /> <p>Sign In / Sign Up</p></a>}
              modal nested> 
                {
                  close => (
                    <div className='modal'>
                        <div className='modalContent'>
                            <section className="modalSec1">
                              <h2>SIGN IN</h2>
                              <form className='modalForm'>
                                <label htmlFor="signInEmail">Email</label>
                                <input className='modalInput' type="email" name="email" id="signInEmail" />
                                <label htmlFor="signInPass">Password</label>
                                <input className='modalInput' type="password" name="password" id="signInPass" />
                                <button disabled type="submit">Log In</button>
                              </form>
                            </section>
                            <section className="modalSec2">
                              <h3>Not registered?</h3>
                              <a><h3>&#8250; SIGN UP</h3></a>
                              <button className='modalClose' onClick=
                                {() => close()}>
                                    Close
                            </button>
                            </section>
                        </div>
                    </div>
                )
                }
              </Popup>

              
              <Link to="/gamenews"><img src={news} className='mobileIcon' /> <p>Gaming News</p></Link>
              <Link><img src={games} className='mobileIcon' /> <p>Game Guides</p></Link>
              <Link><img src={contact} className='mobileIcon' /> <p>Contact</p></Link>
              
            </section>     
          </div>
          :null}
    </>
  )
}

