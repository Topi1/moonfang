import React from 'react'
import "./Navbar.css"
import logo from "../pictures/FangLogo.png"
import logo2 from "../pictures/FangText.png"
import menu from "../pictures/Hamburger.png"

import forumIcon from "../pictures/ForumIcon.png"

import twitter from "../pictures/twitterIcon.png"
import instagram from "../pictures/igIcon.png"
import facebook from "../pictures/fbIcon.png"
import youtube from "../pictures/ytIcon.png"


export default function Navbar() {
  return (
    <>
        <nav className="navbar n1">
                    
                    <section className="logonavsec">
                        <img src={logo} alt="" className='logo logo1'/>
                    </section>
                    
                    
                    <section className="navsection">
                        
                            <a href="">NEWS</a>
                            <a href="">BALDUR'S GATE III</a>
                            <a href="">DIABLO IV</a>
                            <a href="">DIABLO II</a>
                            <a href="">ELDEN RING</a>
                            <a href="">FORUMS
                            {/*<img src={forumIcon} alt="" className='forumicon'/> */}
                            </a>
                        
                        
                    </section>
                    <section className="smallnavsec">
                      <section className="navSocials">
                        <a href=""><img src={twitter} className='navImg' alt="" /></a>
                        <a href=""><img src={instagram} className='navImg' alt="" /></a>
                        <a href=""><img src={facebook} className='navImg' alt="" /></a>
                        <a href=""><img src={youtube} className='navImg' alt="" /></a>
                      </section>
                    </section>
                    
        </nav>
        <nav className="navbar n2">
                <section class="smallnavsec">
                    

                </section>
                
                <section className="navsection">
                    
                    <a href="">HOME</a>
                    <a href="">BEGINNER GUIDES</a>
                    <a href="">BUILD GUIDES</a>
                    <a href="">ITEMS</a>
                    

                </section>
                <section className="signInSec">
                  {/*
                    <a href="">SIGN IN</a>
                    <a href="">SIGN UP</a>

                  */}
                </section>
          </nav>

          <nav className="mobilenav">
            <section className='mobileNavSec1'>
              <img src={logo} alt="" className='mobileLogo1'/>
              <img src={logo2} alt="" className='mobileLogo2'/>
            </section>
            <section className='mobileNavSec2'>
              <img src={menu} alt="" className='mobileMenuIcon'/>
            </section>
          </nav>
    </>
  )
}

