type ContentBlock = {
  title: string;
  paragraph: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

const blocks: ContentBlock[] = [
  {
    title: "Fencing Installation & Replacement",
    paragraph:
      "We install and replace wooden fencing, fence panels and tired boundary fencing for homes, gardens, farms and commercial spaces. Old fencing can be removed and disposed of, leaving your space neat and ready to use.",
    ctaLabel: "Ask for a Fencing Quote",
    ctaHref: "/services/fencing-installation-replacement",
    image: "/gal_cutting_edge_01.jpg",
    imageAlt: "New timber garden fencing installed by Cutting Edge in Perthshire",
  },
  {
    title: "Garden Transformations",
    paragraph:
      "Whether your garden needs hedge removal, turfing, a patio, gravel areas or a full tidy-up, Cutting Edge can help turn neglected outdoor space into somewhere clean, practical and summer ready.",
    ctaLabel: "Make Your Garden Summer Ready",
    ctaHref: "/services/landscaping-garden-makeovers",
    image: "/gal_cutting_edge_05.jpg",
    imageAlt: "Landscaping and patio garden makeover completed by Cutting Edge",
  },
  {
    title: "Roof Cleaning & De-Mossing",
    paragraph:
      "Cutting Edge also provides hand-cleaned roof work, full de-mossing, gutter clearing and roof treatments. Removing moss and debris helps improve drainage, protect the roof and keep the property looking its best.",
    ctaLabel: "Get a Free Roof Cleaning Quote",
    ctaHref: "/services/roof-cleaning-demossing",
    image: "/gal_cutting_edge_04.jpg",
    imageAlt: "Hand-cleaned roof and de-mossing work by Cutting Edge",
  },
];

export const HomepageContentSection = () => {
  return (
    <section id="service-information" className="box-border caret-transparent pt-[70px] pb-0 md:pt-[120px] md:pb-0 bg-transparent">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px]">
        <div className="box-border caret-transparent mb-12 md:mb-16">
          <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">Fencing, Tree Care & Landscaping</h2>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-8">Cutting Edge helps customers across Perth, Dundee, Perthshire and nearby areas with the outdoor jobs that make properties safer, tidier and easier to enjoy. From new fences and old fence removal to hedge removal, turfing, patios, gravel and garden clearances, the team handles practical outdoor improvements with tidy workmanship. <a href="/contact" className="text-[#16a34a] hover:underline font-medium">Contact us to discuss your project</a>.</p>
        </div>
        {blocks.map((block, index) => (
          <div
            key={block.title}
            className={`flex flex-col gap-8 mb-16 items-center md:mb-20 md:gap-12 md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={block.image}
                alt={block.imageAlt}
                width={600}
                height={450}
                loading="lazy"
                className="box-border caret-transparent w-full h-64 rounded-2xl object-cover sm:h-80 md:h-96"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">{block.title}</h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">{block.paragraph}</p>
              <a
                href={block.ctaHref}
                className="inline-flex items-center gap-2 text-white text-base font-bold bg-[#16a34a] box-border caret-transparent px-6 py-3 rounded-[100px] hover:bg-[#15803d] transition-colors"
              >
                {block.ctaLabel} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
