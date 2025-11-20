// src/pages/Home.jsx
import FlexibilitySection from "../components/home/FlexibilitySection.jsx";
import Hero from "../components/home/Hero.jsx";
import IntroSection from "../components/home/IntroSection.jsx";
import ValuesThatBuild from "../components/home/ValuesThatBuild.jsx";
import WhoWeAreSection from "../components/home/WhoWeAreSection.jsx";

function Home() {
  return (
    <>
      <Hero />
      <IntroSection/>
      <WhoWeAreSection/>
      <ValuesThatBuild/>
      <FlexibilitySection/>
      {/* We can add additional sections below later */}
      {/* <SectionBelowHero /> */}
    </>
  );
}

export default Home;
