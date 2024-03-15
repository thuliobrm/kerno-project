"use client";
import React, { useState } from "react";
import CarouselImg1 from "@assets/Frame 23.png";
import CarouselImg2 from "@assets/Frame 24.png";
import Image from "next/image";
import "./index.css";

export default function Carousel() {
  const [marginLeft, setMarginLeft] = useState(0);

  function marginControl(margin: number) {
    setMarginLeft(margin);
  }
  return (
    <section className="carousel-content">
      <div className="carousel-list-area">
        <div style={{ marginLeft: marginLeft }} className="carousel-list">
          <div className="carousel-imgs">
            <Image src={CarouselImg1} alt="img1" />
          </div>
          <div className="carousel-imgs">
            <Image src={CarouselImg2} alt="img2" />
          </div>
        </div>
      </div>
      <div className="carousel-control">
        <div
          style={{ backgroundColor: marginLeft === 0 ? "#FFA901" : "#F85600" }}
          onClick={() => marginControl(0)}
          className="circle"
        ></div>

        <div
          style={{
            backgroundColor: marginLeft === -400 ? "#FFA901" : "#F85600",
          }}
          onClick={() => marginControl(-400)}
          className="circle"
        ></div>
      </div>
    </section>
  );
}
