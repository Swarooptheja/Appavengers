// import Slider from "react-slick";
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // import Slider from "react-slick";

// const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500 // This sets the time interval in milliseconds
//   };
  
//   return (

//     <div style={{ position: "relative", top: "100px", left: "0px", width: "1350px", height: "0px" }}>
//     <Slider {...settings}>
//     <div>
//        <img src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//          <img src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//         <img src="https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//         <img src="https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//         <img src="https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//         <img src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.4" alt="" />
//        </div>
//     </Slider>
//   </div>
    
//   );
// }

// export default SimpleSlider;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const SliderContainer = ({ children }) => {
//   return <div style={{ position: "relative",zIndex:1 }}>{children}</div>;
// };

// const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000
//   };

//   return (
//     <SliderContainer>
//       <div style={{ position: "absolute", top: "50px", left: "50px", width: "400px", height: "400px" }}>
//         <Slider {...settings}>
//         <div>
//        <img src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//          <img src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//         <img src="https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//         <img src="https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//         <img src="https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4" alt="" />
//        </div>
//        <div>
//         <img src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.4" alt="" />
//        </div>
//         </Slider>
//       </div>
//     </SliderContainer>
//   );
// };

// export default SimpleSlider;



const SliderContainer = ({ children }) => {
  return <div style={{ position: "relative", zIndex: 1 }}>{children}</div>;
};

const SimpleSlider = () => {
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
          width: "100%",
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
        <img src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.4" alt="" />
        </div>
        <div>
          <img src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.4" alt="" />
        </div>
        <div>
         <img src="https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.4" alt="" />
        </div>
        <div>
         <img src="https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.4" alt="" />
        </div>
        <div>
         <img src="https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4" alt="" />
        </div>
        <div>
         <img src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.4" alt="" />
        </div>
      </Slider>
    </SliderContainer>
  );
};

export default SimpleSlider;


