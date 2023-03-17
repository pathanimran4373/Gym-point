import './Services.scss'

import Fitness5 from '../../All-images/fitness5.jpg'
import Fitness4 from '../../All-images/fitness4.png'
import Fitness3 from '../../All-images/fitness3.png'
import ServicesDeta from './ServicesDeta'
function Services() {
    return (
        <div>
            <section className="section3">
                <div className="section_heding">
                    <h3 className="heading">welcome to fitness</h3>
                    <div className="line"></div>
                    <p> consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliq</p>
                </div>

                <div className="boxcontainer">
                

                    <ServicesDeta src={Fitness3} title='Basic Crossfit' />
                    
                    <ServicesDeta src={Fitness4} title='Fitness Studio' />
                    <ServicesDeta src={Fitness5} title='Yoga Classes' />

                    </div>
            </section>

        </div>
    )
}

export default Services
