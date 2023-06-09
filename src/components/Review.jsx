import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    AOS.init();

    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="carousel w-full"
      style={{
        fontFamily: "cursive",
        backgroundColor: "#ABE0F2",
        border: "5px dotted #35D3F0",
      }}
      data-aos="fade-left"
    >
      <div id="slide1" className="carousel-item relative w-full h-64">
        <div className="flex justify-center items-center flex-wrap">
          <h2 className="text-center text-lg font-bold px-60">
            STRONGLY recommend KIDZ Baby Store to EVERYONE interested in running
            a successful online business! It's incredible. Best. Product. Ever!
            KIDZ Baby Store was worth a fortune to my company
          </h2>
          <br />
          <p className="text-center px-4">
            Review By <br /> - MAIR Q. Dover, North Carolina
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-64">
        <div className="flex justify-center items-center flex-wrap">
          <h2 className="text-center text-lg font-bold px-60">
            Very easy to use. I love your system. Definitely worth the
            investment. Buy this now.
          </h2>

          <p className="text-center px-4">
            Review By <br /> NEELY E. Whippleville, New York
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-64">
        <div className="flex justify-center items-center flex-wrap">
          <h2 className="text-center text-lg font-bold px-60">
            I made back the purchase price in just 48 hours! You guys rock!
          </h2>

          <p className="text-center px-4">
            Review By <br /> MELONY A. Faifax, Washington DC
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
