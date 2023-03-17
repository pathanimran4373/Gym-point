import React from 'react';
import ThirdPage from '../../component/Third-page/ThirdPage';
import Services from '../../component/Services/Services';

import './Home.scss';
function Home() {
  return (
    <>
      <div className="homepage">
        <div className="home_content">
          <h1>MAKE YOUR BODY <br /> <span>BEAUTIFUL</span> </h1>
          <p>we create and give you perfect training</p>
          <button class="btn"> <a href="">CHOOSE YOUR PLAN</a> </button>
        </div>
      </div>
      <Services />

      <ThirdPage />
    </>
  )
}

export default Home;
