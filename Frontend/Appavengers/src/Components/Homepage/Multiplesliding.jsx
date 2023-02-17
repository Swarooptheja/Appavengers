import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Multiplesliding.css"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div id="maincontainer">
        <Slider {...settings} >
          <div  className="slides">
           <img src="https://www.bookswagon.com/Images/staticimages/icon5.png" alt="" /><h3>Fiction Books</h3>
          </div>
          <div className="slides">
            <img src="https://www.bookswagon.com/Images/staticimages/tarot.png" alt="" />   <h3>Tarot Cards</h3>
          </div>
          <div className="slides">
            <img src="https://www.bookswagon.com/Images/staticimages/icon1.png" alt="" />  <h3>Best Seller</h3>
          </div>
          <div className="slides">
           <img src="https://www.bookswagon.com/Images/staticimages/icon8.png" alt="" /><h3>Award Winner</h3>
          </div>
          <div className="slides">
           <img src="https://www.bookswagon.com/Images/staticimages/icon4.png" alt="" />  <h3>Box sets</h3>
          </div>
          
          <div className="slides">
           <img src="https://www.bookswagon.com/Images/staticimages/icon7.png" alt="" />    <h3>Internationl best sellers</h3>
          </div>

          <div className="slides">
           <img src="https://www.bookswagon.com/Images/staticimages/icon2.png" alt="" /> <h3>New Arrivals</h3>
          </div>
          
         
        </Slider>
      </div>
    );
  }
}