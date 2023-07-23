import React, {useRef, useEffect} from 'react'

import HomePageContent from './HomePageContent'

import css from "./Homepage.module.css"
import newsCss from "./NewsPage.module.css"

import BigWolf from "../pictures2/bigwolf.png"
import BigWolf2 from "../pictures2/bigwolf 2.png"
import WolfHead from "../pictures2/wolfhead.png"
import WolfHead2 from "../pictures2/wolfhead2.png"

import Party from "../pictures/BaldursImages/PARTY.png"

import Inarius from "../pictures/DiabloImages/Inarius.png"
import Necromancer from "../pictures/DiabloImages/Necromancer.jpg"

import Wolf from "../pictures/EldenRingImages/wolf.jpg"

export default function EldenSite() {

   

    
  
  
    return (
        <div className={css.homemain}>
            
            
            <div className={css.homeside1}>

            </div>

            <div className={css.maincon}>

              <div className={newsCss.newsMain}>
                <section className={newsCss.header}>
                  <h1>ELDEN RING</h1>
                </section>
              </div>
            
            
            </div>
            <div className={css.homeside2}></div>
    </div>
  )
}
