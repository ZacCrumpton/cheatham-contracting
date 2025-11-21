// src/components/home/ServicesDetailsSection.jsx

function WhyChooseUs() {
  const items = [
    {
      title: "Integrity",
      body: "We do what we say, and we stand by our work.",
    },
    {
      title: "Craftsmanship",
      body: "Every detail matters from framing to final finishes.",
    },
    {
      title: "Communication",
      body: "Clear expectations, tansparent pricing, no surprises.",
    },
    {
      title: "Creativity",
      body: "Practical doesn't mean predictable.",
    },
    {
      title: "Family Values",
      body: "Our name is on every project and that means something to us.",
    },
  ];

  return (
    <section className="w-full bg-cheatham-gray text-white md:h-[613px]">
      <div className="mx-auto h-full px-6 md:px-16 py-20 flex flex-col">
        {/* Big Title */}
        <h2 className="font-display text-[55px] md:text-[90px] leading-none text-white text-center">
          Why Choose Us
        </h2>

        {/* Top horizontal divider */}
        <div className="mt-6 h-[3px] w-[90%] bg-white" />

        {/* 5-column content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-y-0 md:gap-x-0 flex-1">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col md:px-6 ${
                index !== 0 ? "md:border-l-[3px] md:border-white" : ""
              }`}
            >
              <h3 className="font-display text-[24px] md:text-[40px] mb-3 text-center">
                {item.title}
              </h3>
              <p className="font-body text-[15px] md:text-[26px] leading-relaxed text-white/85 text-center">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
