import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SliderContainer = ({ children }) => {
  return <div style={{ position: "relative", zIndex: 1 }}>{children}</div>;
};

const SimpleSlider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dotsClass: "slick-dots",
    customPaging: (i) => (
      <button type="button" aria-label={`slide-${i}`} />
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:0,
          padding: 0,
          width: "50%",
          height: "50px",
          listStyleType: "none",
        }}
      >
        {dots}
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>

      <div>
        <img width={"120%"} height={"600px"} src="https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.6" alt="" />
        </div>
        <div>
          <img width={"120%"}  height={"600px"} src="https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=1.6" alt="" />
        </div>
        <div>
         <img width={"120%"}  height={"600px"} src="https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.6" alt="" />
        </div>
        
      </Slider>
    </SliderContainer>
  );
};

export default SimpleSlider1;


