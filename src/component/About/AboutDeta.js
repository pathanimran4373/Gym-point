import React from 'react'
import './About.scss'
function AboutDeta(propes) {
    return (
        <>
            <div class="section5_box">
                <img class="img" src={propes.img} alt="" />
                <div class="s5b">
                    <h5>{propes.name}</h5>
                    <span>{propes.work}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum tenetur obcaecati, quidem

                        corrupti iste distinctio hic </p>
                    <div class="social_icon">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-whatsapp"></i>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutDeta
