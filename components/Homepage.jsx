import React from 'react'
import css from "./Homepage.module.css"

import mindflayer from "../pictures2/mindflayer.jpg"

export default function Homepage() {
  
  
    return (
        <div className={css.homemain}>
            <div className={css.homeside1}></div>
            <div className={css.maincon}>

            <section className={css.con}>
                <section className={css.headers}>
                        <h1>GAMING NEWS</h1>
                        <a href=""><h2>More News &#8680;</h2></a>
                </section>
                <a className={css.news}>
                    
                    <section className={css.imgsection}>
                        <img src={mindflayer} alt="" className={css.articlepic}/>
                    </section>
                    <section className ={css.textsection}>
                        <div className={css.textdivide1}>
                            <h2>BALDUR'S GATE III</h2>
                        </div>
                        <div className={css.textdivide2}>
                            <h1>Baldur’s Gate III will launch four weeks early on PC, delayed on PS5</h1>
                        </div>
                    </section>   
                </a>
            </section>
            
            <section className={css.con}>
                <h1>GAMES</h1>
                <section className={css.news}>
                </section>
            </section>

            <section className={css.con}>
                <section className={css.headers}>
                    <h1>NEWSLETTER</h1>
                </section>
                <section className={css.news}>
                </section>
            </section>

            <div></div>
            
            
        </div>
        <div className={css.homeside2}></div>
    </div>
  )
}
