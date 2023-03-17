import React from 'react'
import './Trainer.scss'
import AboutDeta from './AboutDeta'
import fitness7 from '../../All-images/fitness7.jpg'
import fit8 from '../../All-images/fit8.jpg'
import fit9 from '../../All-images/fit9.jpg'
function Trainer() {
  return (
    <div>
      <section class="section5" id="contact">
                <div class="section_heding">
                    <h3>expert trainer</h3>
                    <div class="lineItem"></div>
                </div>

                <div class="section5_container">
                    <AboutDeta img={fitness7} name='Sara Millair' work='Spinning Trainer'/>
                    <AboutDeta img={fit8} name='Karter Sleg' work='Yoga Trainer'/>
                    <AboutDeta img={fit9} name='Joan Methu' work='Body Trainer'/>
                   
                   
                    
                </div>
            </section>
    </div>
  )
}

export default Trainer
