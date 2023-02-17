import React from 'react';
import SimpleSlider from './caurosel';
import "./Home.css";
import Automaticsliding from "./Multiplesliding"
import Trendingsliding from "./Multiplesliding"
export const Home = () => {
  return (
    <div id='homepagecontainer'>
        <div id='homepageheader'>
            
            <img src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6" alt="" />
        </div>
        <div id='sliderfirstautomatic'>
            <SimpleSlider/>
        </div>
        <hr />
        <div id='slidersecondmultiple'>
            <Automaticsliding/>
        </div>
        <hr />

        <div id="trending">
            <Trendingsliding/>
        </div>

    </div>
  )
}
