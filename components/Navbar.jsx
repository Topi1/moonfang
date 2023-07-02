import React from 'react'
import "./Navbar.css"
import logo from "../pictures/FangLogo.png"
import logo2 from "../pictures/MoonFang.png"
import forumIcon from "../pictures/ForumIcon.png"


export default function Navbar() {
  return (
    <>
        <nav className="navbar n1">
                    
                    <section className="smallnavsec">
                        <img src={logo} alt="" className='logo logo1'/>
                    </section>
                    
                    
                    <section className="navsection">
                        
                            <a href="">DIABLO II</a>
                            <a href="">DIABLO III</a>
                            <a href="">DIABLO IV</a>
                            <a href="">FORUMS<img src={forumIcon} alt="" className='forumicon'/> </a>
                        
                        
                    </section>
                    <section className="smallnavsec"></section>
                    
        </nav>
        <nav className="navbar n2">
                <section class="smallnavsec">
                    

                </section>
                
                <section className="navsection">
                    
                    <a href="">BEGINNER GUIDES</a>
                    <a href="">BUILD GUIDES</a>
                    <a href="">ITEMS</a>
                    

                </section>
                <section className="smallnavsec"></section>
            </nav>
    </>
  )
}

