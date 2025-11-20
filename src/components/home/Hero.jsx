// src/components/home/Hero.jsx
import { useEffect, useState } from "react";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  // Simple parallax: move the photo slightly based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${offsetY * 0.15}px)`, // adjust strength as needed
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero area is just the image */}
      <div className="relative min-h-[762px] w-full">
        <div
          className="absolute inset-0"
          style={parallaxStyle}
        >
          {/* Swap this src for your actual hero image once ready */}
          <img
            src="/images/kitchen_02.JPG"
            alt="Cheatham Contracting hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
