// src/components/home/CTA.jsx

function CTA() {
  return (
    <section className="w-full">
      <div className="relative h-[925px] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/studio_02.JPG" // 👉 swap this to your actual image path
          alt="Cheatham Contracting project"
          className="h-full w-full object-cover"
        />

        {/* Gray overlay at 50% */}
        <div className="absolute inset-0 bg-cheatham-gray/60" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Title */}
          <h2 className="font-display text-[40px] md:text-[80px] leading-none text-white mb-6">
            Ready to Build?
          </h2>

          {/* Paragraph */}
          <p className="font-body italic text-[24px] md:text-[30px] text-white/90 max-w-2xl mb-10">
            Let's bring your space to life beautifully, intentionally, and with care.
          </p>

          {/* Button – sharp corners, cheatham-gray */}
          <a
            href="/contact" // 👉 update to your router <Link> if needed
            className="
              inline-flex items-center justify-center
              px-10 py-4
              bg-cheatham-gray text-white
              font-display text-lg md:text-xl
              tracking-wide uppercase
              rounded-none
              hover:bg-white hover:text-cheatham-gray
              transition-colors duration-200
            "
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
