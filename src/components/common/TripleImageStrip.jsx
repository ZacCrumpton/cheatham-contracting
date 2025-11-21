// src/components/common/TripleImageStrip.jsx
import React from "react";

function TripleImageStrip({
  items = [],           // [{ imageSrc, imageAlt, title, label }]
  height = "h-[710px]",
}) {
  return (
    <section className="w-full">
  <div className={`grid grid-cols-1 md:grid-cols-3 ${height}`}>
    {items.map((item, idx) => (
      <div
        key={idx}
        className="relative h-full overflow-hidden"
      >
        {/* Image slightly scaled to hide seams */}
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="h-full w-full object-cover scale-[1.03]"
        />

        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-cheatham-gray/75" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-display text-[55px] text-white leading-none">
            {item.title}
          </p>
          <p className="font-body text-[25px] text-white mt-4 tracking-wide">
            {item.label}
          </p>
        </div>
      </div>

    ))}
  </div>
</section>

  );
}

export default TripleImageStrip;
