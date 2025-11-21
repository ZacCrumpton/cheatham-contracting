import SplitSection from "../common/SplitSection";

function WhoWeAreSection() {
    return(
        <SplitSection
        
        title="Who We Are"
        subtitle={"Flexibility"}
        body={"Cheatham Contracting is led by husband-and-wife team Ryan and Siera Cheatham, blending structure and style under one roof. Ryan brings years of hands-on experience as a licensed general contractor, while Siera draws from her interior design background to craft spaces that are both functional and beautiful. Rooted in faith, family, and integrity, they create homes with intention, built to last through Tennessee's changing seasons and desinged to feel like home from day one."}
        imageSrc={"/images/bathroom_01.JPG"}
        imageAlt={"Completed bathroom space by Cheatham Contracting"}
        imageLeft={true}
        titleSize="text-[90px]"
        bodySize="text-[25px]"
        baseOffset={0}

        />
    )
}

export default WhoWeAreSection;