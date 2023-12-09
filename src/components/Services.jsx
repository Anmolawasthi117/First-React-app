import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src="https://github.com/meabhisingh/react-techystar/blob/master/src/assets/3.jpg?raw=true"alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src="https://github.com/meabhisingh/react-techystar/blob/master/src/assets/4.jpg?raw=true" alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;