import React from 'react'
import css from "./Homepage.module.css"

import mindflayer from "../pictures2/mindflayer.jpg"
import inarius from "../pictures2/inarius.jpg"

export default function Homepage() {
  
  
    return (
        <div className={css.homemain}>
            <div className={css.homeside1}></div>
            <div className={css.maincon}>

            <section className={css.con}>
                <section className={css.headers}>
                        <h1>GAMING NEWS</h1>
                        <a ><h2>More News &#8680;</h2></a>
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
                <h1>GAME GUIDES</h1>
                <a className={css.news}>
                    <section className={css.imgsection}>
                        <img src={inarius} alt="" className={css.articlepic}/>
                    </section>  
                    <section className ={css.textsection}>
                        <div className={css.textdivide1}>
                            <h2>DIABLO IV</h2>
                        </div>
                        <div className={css.textdivide2}>
                            <h1>Defeat the forces of Hell with our character builds</h1>
                        </div>
                    </section>
                     
                </a>
            </section>

            <section className={css.con}>
                <section className={css.headers}>
                    <h1>NEWSLETTER</h1>
                </section>
                <section className={css.newsLetterMain}>
                    <section className={css.newsLetter}>
                        <div className={css.newsLetterSection1}>
                            <h1>Subscribe to newsletter and don't miss out on GAMING NEWS or NEW BUILD GUIDES.</h1>
                        </div>
                        <div className={css.newsLetterSection2}>
                            <form>
                                <input type="email" name="" id="" placeholder='Enter your email here'/>
                            </form>
                            <input type="submit" value="Submit" />
                        </div>
                    </section>
                </section>
            </section>

            <div style={{"height" : "70px"}}></div>
            
            
        </div>
        <div className={css.homeside2}></div>
    </div>
  )
}
