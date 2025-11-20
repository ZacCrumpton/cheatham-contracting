// src/components/common/SplitSection.jsx

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
}) {
  // Text alignment based on which side the text is on (desktop)
  const textAlignClasses = imageLeft
    ? "text-left items-start md:text-right md:items-end" // text on the RIGHT side
    : "text-left items-start md:text-left md:items-start"; // text on the LEFT side

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
          <div className="h-full w-full overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
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
