"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import hero from "../../images/hero.png";
import "@/components/Hero/Hero.scss";
import { useState } from "react";
export default function Hero() {
  const [activeDot, setActiveDot] = useState(0);

  const carouselItems = [
    {
      img: hero,
      title: "Lessons and insights",
      titleHighlight: "from 8 years",
      text: "Where to grow your business as a photographer: site or social media?",
    },

    {
      img: hero,
      title: "Carousel item 2",
      titleHighlight: "Carousel item 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: hero,
      title: "Carousel item 3",
      titleHighlight: "Carousel item 3",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];

  return (
    <div className="hero">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <Image className="hero-image" src={item.img} alt={`Slide ${index}`} />

              <div className="hero-content">
                <h1 className="text -xxl -secondary-color -semibold">
                  {item.title}
                  <span className="text -xxl -primary-color -semibold">
                    {" " + item.titleHighlight}
                  </span>
                </h1>
                <p className="text -sm -third-color -regular">{item.text}</p>
                <button className="custom-button text -sm -white">
                  Register
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
