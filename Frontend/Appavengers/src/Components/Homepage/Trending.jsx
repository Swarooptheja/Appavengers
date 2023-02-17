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
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div id="maincontainer">
                <Slider {...settings} >
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/340/9781974732340.jpg" alt="" /><h3>Fiction Books</h3>
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/965/9781974720965.jpg" alt="" /> <h3>Tarot Cards</h3>
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/255/9781421536255.jpg" alt="" />  <h3>Best Seller</h3>
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/785/9781974722785.jpg" alt="" /><h3>Award Winner</h3>
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/984/9781974725984.jpg" alt="" /> <h3>Box sets</h3>
                    </div>

                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/785/9780857367785.jpg" alt="" />  <h3>Internationl best sellers</h3>
                    </div>

                    <div className="slides">
                       <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/279/9781974717279.jpg" alt="" /> <h3>New Arrivals</h3>
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/279/9781974717279.jpg" alt="" />
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/007/9780857360007.jpg" alt="" />
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/359/9781974725359.jpg" alt="" />
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/048/9781974724048.jpg" alt="" />
                    </div>
                    <div className="slides">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/489/9789353450489.jpg" alt="" />
                    </div>
                    

                </Slider>
            </div>
        );
    }
}