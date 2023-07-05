import React from 'react'
import "./Homepage.css"

import mindflayer from "../pictures2/mindflayer.jpg"

export default function Homepage() {
  
  
    return (
        <div className='maincon'>

        <section className='con'>
            <section className="headers">
                    <h1>GAMING NEWS</h1>
                    <a href=""><h2>More News</h2></a>
            </section>
            <a className="news">
                
                <section>
                    <img src={mindflayer} alt="" className='articlepic'/>
                </section>
                <section className ="textsection">
                <div className='textdivide1'>
                    <h2>BALDUR'S GATE III</h2>
                </div>
                <div className='textdivide2'>
                    <h1>Baldur’s Gate III will launch four weeks early on PC, delayed on PS5</h1>
                </div>
                </section>   
            </a>
        </section>
        
        <section className='con'>
            <h1>GAMES</h1>
            <section className="news">
            </section>
        </section>

        <section className='con'>
            <section className="headers">
                <h1>NEWSLETTER</h1>
            </section>
            <section className="news">
            </section>
        </section>

        <div></div>
        
        
    </div>
  )
}
