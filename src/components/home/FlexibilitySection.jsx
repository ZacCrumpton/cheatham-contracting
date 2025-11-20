import SplitSection from "../common/SplitSection";

function FlexibilitySection() {
    return(
        <SplitSection
        
        title="Interior Design & Construction"
        subtitle="Flexibility"
        body2={"Clients can hire us for design, construction, or both. Every project is tailered to meet your needs, never on-size-fits-all."}
        body={"Blending creativity and precision to craft homes thaat stand the test of time."}
        imageSrc={"/images/bathroom_01.JPG"}
        imageAlt={"Completed bathroom space by Cheatham Contracting"}
        imageLeft={false}
        titleSize="text-[90px]"
        bodySize="text-[25px]"
        subtitleSize="text-[60px]"

        />
    )
}

export default FlexibilitySection;