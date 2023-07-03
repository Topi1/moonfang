import React, {useState} from 'react'
import "./Sidebar.css"
import logo2 from "../pictures/FangText.png"
import logo from "../pictures/FangLogo.png"
import menu from "../pictures/Hamburger.png"

import login from "../pictures/logIn.png"
import games from "../pictures/GamesIcon.png"
import news from "../pictures/newsIcon.png"
import contact from "../pictures/contactIcon.png"

import twitter from "../pictures/twitterIcon.png"
import instagram from "../pictures/igIcon.png"
import facebook from "../pictures/fbIcon.png"
import youtube from "../pictures/ytIcon.png"



export default function Sidebar() {

const [style, setStyle] = useState("sidebar");

const [show, setShow] = useState(true);

const [showHover1, setShowHover1] = useState(false);

const [showHover2, setShowHover2] = useState(false);

function handleClick() {

    if (style === "sidebar") {

        setStyle("sidebar2")}
    else {
        setStyle("sidebar")
    }

    setShow(!show);
   
}

  return (
    <div className={style}>

            <section className='logoSection'>

                {show ? (
                    <section className='sideBarOpenBtn' onClick={() => handleClick()}> <img src={menu} alt="" className='menuIcon'/> </section>
                ) : (
                    <section className='sideBarCloseBtn' onClick={() => handleClick()}>X</section>
                )}
                
                {!show ?   
                <img src={logo2} alt="" className='logo sidelogo'/>
                :null}

            </section>

            
            <section className = "sidebarsection">
                <a href="" className='sidelink' 
                   onMouseEnter={() => setShowHover1(true)}
                   onMouseLeave={() => setShowHover1(false)}> 
                    <section className="iconsection"><img src={login} alt="" className='sidebaricon'/></section> 
                    {!show ? <p>SIGN IN / SIGN UP</p> :null}

                    {showHover1 && (
                    <div className="submenu1">

                        <a href="">SIGN IN</a>
                        <a href="">SIGN UP</a>
                        
                    </div>)}

                </a>
                <a href="" className='sidelink' 
                   onMouseEnter={() => setShowHover2(true)}
                   onMouseLeave={() => setShowHover2(false)}> 
                    <section className="iconsection"><img src={games} alt="" className='sidebaricon'/></section> 
                    {!show ? <p>GAME GUIDES</p> :null}
                    
                    {showHover2 && (
                    <div className="submenu2">

                        <a href="">DIABLO II</a>
                        <a href="">DIABLO IV</a>
                        <a href="">ELDEN RING</a>
                        <a href="">BALDUR'S GATE III</a>
                    
                    </div>)}

                </a>
                <a href="" className='sidelink'> 
                    <section className="iconsection"><img src={news} alt="" className='sidebaricon'/></section> 
                    {!show ? <p>NEWS</p> :null}
                </a>
                <a href="" className='sidelink'> 
                    <section className="iconsection"><img src={contact} alt="" className='sidebaricon'/></section> 
                    {!show ? <p>CONTACT</p> :null}
                </a>
            </section>


            <footer className='sideFooter'>
                {!show ?        
                <section className="footerSection">
                    <a href=""><img src={twitter} className='footerImg' alt="" /></a>
                    <a href=""><img src={instagram} className='footerImg' alt="" /></a>
                    <a href=""><img src={facebook} className='footerImg' alt="" /></a>
                    <a href=""><img src={youtube} className='footerImg' alt="" /></a>
                </section> :null}

            </footer>
    </div>
  )
}
