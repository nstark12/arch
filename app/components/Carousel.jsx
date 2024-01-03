"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const images = [
  "/image/teen-time-candyland.jpg",
  "/image/teen-time-candyland.jpg",
  "/image/teen-time-candyland.jpg",
  "/image/teen-time-candyland.jpg",
  "/image/teen-time-candyland.jpg",
];

const Carousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div className="slider-img">
                <Image
                  alt="teen time image"
                  width={600}
                  height={600}
                  src={src}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
