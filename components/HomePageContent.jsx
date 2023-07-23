import React, {useRef} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import css from "./Homepage.module.css"

import BigWolf from "../pictures2/bigwolf.png"
import BigWolf2 from "../pictures2/bigwolf 2.png"
import WolfHead from "../pictures2/wolfhead.png"
import WolfHead2 from "../pictures2/wolfhead2.png"

import Party from "../pictures/BaldursImages/PARTY.png"

import Inarius from "../pictures/DiabloImages/Inarius.png"
import Necromancer from "../pictures/DiabloImages/Necromancer.jpg"

import Wolf from "../pictures/EldenRingImages/wolf.jpg"

export default function HomePageContent() {

    const scrollElement = useRef(null)

    const scrollLeft = () => {
        
        
        scrollElement.current.scrollLeft -= 850
        

    }
    const scrollRight = () => {
        
        scrollElement.current.scrollLeft += 850
        

    } 

  return (
    <>
        <div className={css.siteBgImg}><img src={WolfHead2} alt="" /></div>
            <section className={css.con}>
                <section className={css.headers}>
                        <h1>GAMING NEWS</h1>
                        <Link to="/gamenews"><h2>All News &#8680;</h2></Link>
                </section>
                <div className={css.scroller} ref={scrollElement}>
                    <a className={css.news}>
                        
                        <section className={css.imgsection}>
                            <img src={Party} alt="" className={css.articlepic}/>
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
                    <a className={css.news}>
                        
                        <section className={css.imgsection}>
                            <img src={Wolf} alt="" className={css.articlepic}/>
                        </section>
                        <section className ={css.textsection}>
                            <div className={css.textdivide1}>
                                <h2>ELDEN RING</h2>
                            </div>
                            <div className={css.textdivide2}>
                                <h1>Our predictions for the Elden Ring DLC.</h1>
                            </div>
                        </section>   
                    </a>
                    <a className={css.news}>
                        
                        <section className={css.imgsection}>
                            <img src={Necromancer} alt="" className={css.articlepic}/>
                        </section>
                        <section className ={css.textsection}>
                            <div className={css.textdivide1}>
                                <h2>DIABLO IV</h2>
                            </div>
                            <div className={css.textdivide2}>
                                <h1>DIABLO IV SEASON 1: Season Of The Malignant begins 20.7</h1>
                            </div>
                        </section>   
                    </a>
                </div>
                <button onClick = {scrollLeft} className={`${css.btnLeft} ${css.scrollBtn}`}>&#8249;</button>
                <button onClick = {scrollRight} className={`${css.btnRight} ${css.scrollBtn}`}>&#8250;</button>

                <div className={css.slideInfo}>Swipe &#8250;</div>

            </section>
            
            <section className={css.con}>
                <section className={css.headers}>
                        <h1>GAME GUIDES</h1>
                        <a ><h2>All Games &#8680;</h2></a>
                </section>
                
                    <a className={css.news}>
                        <section className={css.imgsection}>
                            <img src={Inarius} alt="" className={css.articlepic}/>
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
                                <input className={css.newsEmail} type="email" name="" id="" placeholder='Enter your email here'/>
                            </form>
                            <input type="submit" value="Submit" />
                        </div>
                    </section>
                </section>
            </section>

            <div style={{"height" : "70px"}}></div>
            
            
    </>
  )
}
