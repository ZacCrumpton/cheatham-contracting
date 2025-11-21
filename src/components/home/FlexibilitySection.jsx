import SplitSection from "../common/SplitSection";

function FlexibilitySection() {
    return(
        <SplitSection
        
        title="Interior Design & Construction"
        subtitle="Flexibility"
        body2={"Clients can hire us for design, construction, or both. Every project is tailored to meet your needs, never on-size-fits-all."}
        body={"Blending creativity and precision to craft homes that stand the test of time."}
        imageSrc={"/images/sink_01.jpg"}
        imageAlt={"Completed Wet Bar by Cheatham Contracting"}
        imageLeft={false}
        titleSize="text-[90px]"
        bodySize="text-[25px]"
        subtitleSize="text-[60px]"
        useParallax={true}
        baseOffset={30}

        />
    )
}

export default FlexibilitySection;