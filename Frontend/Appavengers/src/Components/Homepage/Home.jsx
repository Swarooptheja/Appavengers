import React from 'react';
import SimpleSlider from './caurosel';
import SimpleSlider1 from './caurosel1';
import "./Home.css";
import Automaticsliding from "./Multiplesliding"
import Trendingsliding from "./Trending"
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
        <div id='trendingbottom'>
            <SimpleSlider1/>
        </div>

        <hr />

    </div>
  )
}