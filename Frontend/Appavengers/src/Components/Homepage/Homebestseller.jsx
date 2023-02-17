import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./homebestseller.css"
// import { useSelector } from "react-redux";
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
        <>
       <h1 style={{color:"red",fontStyle:"italic"}}>Featured Authors</h1>
      <div id="maincontainer">
        <Slider {...settings} >
            
          <div className="slides">
            <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/stephen-edwin-king.jpg" alt="" />   <h3>Stephen king</h3>
          </div>
          <div className="slides">
            <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/download.jpg" alt="" />  <h3>John Green</h3>
          </div>
          <div className="slides">
           <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/dillian.jpg" alt="" /><h3>Gillian flynn</h3>
          </div>
          <div className="slides">
           <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/gayle-forman.jpg" alt="" />  <h3>Gayle Forman</h3>
          </div>
          
          <div className="slides">
           <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/ma10_milestones_segal.jpg" alt="" />    <h3>Erich Segal</h3>
          </div>

          <div className="slides">
           <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/sylvia2.jpg" alt="" /> <h3>Plath</h3>
          </div>
          <div className="slides">
           <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/dr-shashi-tharoor-2.jpg" alt="" /> <h3>Tharoor</h3>
          </div>
          <div className="slides">
           <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/arundhatistory_647_100316054702.jpg" alt="" /> <h3>Arudhati Roy</h3>
          </div>
          <div className="slides">
           <img src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/stephan-coonts.jpg" alt="" /> <h3>Stephen Coonts</h3>
          </div>
          
         
        </Slider>
      </div>
      </>
    );
  }
}