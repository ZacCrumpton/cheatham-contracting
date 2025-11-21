// src/components/home/ServicesLite.jsx

import TripleImageStrip from "../common/TripleImageStrip";

function ServicesLite() {
  return (
    <TripleImageStrip
      items={[
        {
          imageSrc: "/images/construction_01.jpg",
          imageAlt: "Bathroom Renovation",
          title: "Full Home Rennovations & Custom Builds",
          label: "From kitchens and bathrooms to full new-build homes and outdoor spaces, we manage projects with care and clarity from start to finish.",
        },
        {
          imageSrc: "/images/stock_01.jpg",
          imageAlt: "Kitchen Remodel",
          title: "Interior Designs",
          label: "Selections, layouts, and furnishings that reflect your style and stand the test of time.",
        },
        {
          imageSrc: "/images/studio_01.JPG",
          imageAlt: "Living Room Upgrades",
          title: "Small Commercial Projects",
          label: "Thoughtful design and quality construction for studios, offices, and boutique spaces across Nashville.",
        },
      ]}
      height="h-[710px]" // tweak if needed
    />
  );
}

export default ServicesLite;
