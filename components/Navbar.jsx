import React, {useState} from 'react'
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
                        <img src={logo} alt="" className='logo logo1'/>
                    </section>
                    
                    
                    <section className="navsection">
                        
                            <a >NEWS</a>
                            <a >BALDUR'S GATE III</a>
                            <a >DIABLO IV</a>
                            <a >DIABLO II</a>
                            <a >ELDEN RING</a>
                            <a >FORUMS
                            {/*<img src={forumIcon} alt="" className='forumicon'/> */}
                            </a>
                        
                        
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
                  <button type="submit" value="Search">Search</button>
                </form>
            </section>
            <section className='mobileMenuSec2'>
              <a><img src={login} className='mobileIcon' /> <p>Sign In / Sign Up</p></a>
              <a><img src={news} className='mobileIcon' /> <p>Gaming News</p></a>
              <a><img src={games} className='mobileIcon' /> <p>Game Guides</p></a>
              <a><img src={contact} className='mobileIcon' /> <p>Contact</p></a>
              
            </section>     
          </div>
          :null}
    </>
  )
}

