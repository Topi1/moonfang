import React from 'react'
import "./Footer.css"

import logo from "../pictures/FangLogo.png"
import logo2 from "../pictures/FangText.png"


export default function Footer() {
  return (
    <footer className="footer">

        <section className='footerSec'>
            <ul>
                <li><a href="">TERMS OF SERVICE</a></li>
                <li><a href="">PRIVACY POLICY</a></li>
                <li><a href="">COOKIE POLICY</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
            
        </section>

        <section className='footerSec'>

            <div className='footerDiv'>
                <img src={logo} className='footerLogo1' alt="" />
                <img src={logo2} className='footerLogo2' alt="" />
            </div>

            <div className='footerDiv'>
                <p>© 2023 Moonfang Media Group, All Rights Reserved</p>
            </div>
        </section>

    </footer>
  )
}
