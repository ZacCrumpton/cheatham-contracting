// src/components/common/SplitSection.jsx
import { useEffect, useRef, useState } from "react";

function SplitSection({
  title,
  subtitle = null,
  body,
  body2 = null,
  imageSrc,
  imageAlt,
  imageLeft = true,
  bg = "bg-white",
  titleSize = 'text-4xl',
  subtitleSize = "text-2xl",
  bodySize = "text-base",
  useParallax = false,
  baseOffset = 0,
}) {
  // Text alignment based on which side the text is on (desktop)
  const textAlignClasses = imageLeft
    ? "text-left items-start md:text-right md:items-end" // text on the RIGHT side
    : "text-left items-start md:text-left md:items-start"; // text on the LEFT side

  const imageWrapperRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const[isDesktop, setIsDesktop] = useState(false);

  //Track desktop vs mobile (md breakpoint ~ 768px)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 useEffect(() => {
  if (!useParallax || !isDesktop) return;

  const handleScroll = () => {
    if (!imageWrapperRef.current) return;

    const rect = imageWrapperRef.current.getBoundingClientRect();

    // Negative so image moves opposite the scroll, tweak factor to taste
    const speed = 0.25; // increase this to make it move faster
    const offset = -rect.top * speed;

    setParallaxOffset(offset);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [useParallax, isDesktop]);


  return (
    <section className={`${bg} w-full`}>
      <div
        className={`
          flex w-full flex-col md:flex-row
          ${imageLeft ? "" : "md:flex-row-reverse"}
          h-[885px]
        `}
      >
        {/* IMAGE HALF */}
        <div className="w-full md:w-1/2 h-[885px]">
          <div
            ref={imageWrapperRef}              
            className="h-full w-full overflow-hidden"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover object-bottom will-change-transform"
              style={
                useParallax && isDesktop
                ? { transform: `translateY(${parallaxOffset}px)`, }
                : { transform: `translateY(${baseOffset})px`, }
                  
              }
            />

          </div>
        </div>


        {/* TEXT HALF */}
        <div className="w-full md:w-1/2 h-[885px] flex">
          <div
            className={`
              flex flex-col justify-center gap-4
              w-full px-6 md:px-36
              ${textAlignClasses}
            `}
          >
            {/* Title */}
            <h2 className={`font-display ${titleSize} text-cheatham-gray`}>
              {title}
            </h2>

            {/* Body */}
            <p className={`mt-4 font-body ${bodySize} leading-relaxed text-cheatham-gray max-w-xl`}>
              {body}
            </p>
            
            {/* Optional subtitle */}
            {subtitle && (
              <h3 className={`mt-2 font-body ${subtitleSize} text-cheatham-gray/90`}>
                {subtitle}
              </h3>
            )}

            {/* Body2 */}
            {body2 && (
            <p className={`mt-4 font-body ${bodySize} leading-relaxed text-cheatham-gray max-w-xl`}>
              {body2}
            </p>
            )}
            
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplitSection;
