import React from "react";
import "./Banner.css";
import Carousel from 'react-bootstrap/Carousel';
import video1 from "../../public/videos/video1.mp4";
import video3 from "../../public/videos/video3.mp4";
import video4 from "../../public/videos/video4.mp4";


const Banner = () => {
	return (
    <div className="container-fluid carousel-wrapper">
    <div className="overlay">
      <Carousel fade="true" pause="false" controls="false">
        <Carousel.Item interval="3000">
          {/* <img src={Img1} className="carousel-image" alt="" /> */}
          <video src={video1} autoPlay muted loop></video>
          <Carousel.Caption className="caption">
            <h3 className="caption-heading">
            Thehomy's Delightful Services for Your Everyday Bliss!
            </h3>

            <p className="caption-para">
            We believe in transforming ordinary moments into extraordinary memories through our range of delightful services. Our mission is simple: to make your everyday life blissful and stress-free.
              
              <div className="button-carousel-wrapper d-md-block d-none">
              {/* <Button2 name="Explore" className="button-carousel" /> */}


              </div>
            </p>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval="3000">
          {/* <img src={Img2} className="carousel-image" alt="" /> */}
          <video src={video4} autoPlay muted loop></video>

          <Carousel.Caption className="caption">
            <h3 className="caption-heading">
            Building Bonds and Brightening Homes
            </h3>
            <p className="caption-para">
            Step into Thehomy, where we don't just clean homes; we build bonds and brighten lives, creating a harmonious haven for all. Our commitment goes beyond the surface, extending to the heart of what makes a house a home.
              <div className="button-carousel-wrapper d-md-block d-none">
              {/* <Button2 name="Explore" className="button-carousel" /> */}


              </div>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval="3000">
          {/* <img src={Img3} className="carousel-image" alt="" /> */}
          <video src={video3} autoPlay muted loop></video>

          <Carousel.Caption className="caption">
            <h3 className="caption-heading">
            Elevate Your Home Experience with Our Experts.
            </h3>
            <p className="caption-para">
            At Thehomy, we believe in the power of a well-cared-for home. Our services extend to childcare, providing a safe and nurturing environment for your little ones. With our dedicated caregivers, you can trust that your children are in capable hands.
              <div className="button-carousel-wrapper d-md-block d-none">
              {/* <Button2 name="Explore" className="button-carousel" /> */}


              </div>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
        
	);
};

export default Banner;
