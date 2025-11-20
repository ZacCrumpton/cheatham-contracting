// src/components/home/IntroSection.jsx
import SectionWrapper from "../common/SectionWrapper";

function IntroSection() {
  return (
    <SectionWrapper height="h-[275px]" bg="bg-cheatham-gray">
        <h2 className="font-display text-[80px] text-white leading-none text0white">
            Cheatham Means Craftsmanship
        </h2>
        <p className="mt-6 font-body italic text-[25px] leading-tight text-white max-w-4-xl">
            An interior design and build team rooted in integrity dedicated to creating<br/>
            timeless space that feel as good as theyt  look.
        </p>
    </SectionWrapper>
  );
}

export default IntroSection;
