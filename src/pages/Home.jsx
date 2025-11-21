// src/pages/Home.jsx
import FlexibilitySection from "../components/home/FlexibilitySection.jsx";
import Hero from "../components/home/Hero.jsx";
import IntroSection from "../components/home/IntroSection.jsx";
import ValuesThatBuild from "../components/home/ValuesThatBuild.jsx";
import WhatWeDo from "../components/home/WhatWeDo.jsx";
import WhoWeAreSection from "../components/home/WhoWeAreSection.jsx";
import ServicesLite from "../components/home/ServicesLite.jsx"
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import CTA from "../components/home/CTA.jsx";

function Home() {
  return (
    <>
      <Hero />
      <IntroSection/>
      <WhoWeAreSection/>
      <ValuesThatBuild/>
      <FlexibilitySection/>
      <WhatWeDo/>
      <ServicesLite/>
      <WhyChooseUs/>
      <CTA/>
      {/* We can add additional sections below later */}
      {/* <SectionBelowHero /> */}
    </>
  );
}

export default Home;
