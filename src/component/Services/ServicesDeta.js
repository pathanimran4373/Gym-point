import React from 'react'
import './Services.scss'

function ServicesDeta(props) {
  return (


    <div className="box">
      <img className="img" src={props.src} alt="fitness Modal" />
      <h5 className="">{props.title}</h5>
      <p>Our staff includes amazing professionals that have an eye for crossfit.

      </p>
      <button className="btn"><a href="">get in touch</a></button>
    </div>


  )
}

export default ServicesDeta
