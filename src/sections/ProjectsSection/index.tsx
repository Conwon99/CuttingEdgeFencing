export const ProjectsSection = () => {
  const images = [
    {
      src: "/gal_cutting_edge_01.jpg",
      alt: "New timber garden fencing installed by Cutting Edge in Perthshire",
      href: "/projects/timber-fencing-perthshire",
    },
    {
      src: "/gal_cutting_edge_02.jpg",
      alt: "Fresh wooden fence panels and garden boundary work by Cutting Edge",
      href: "/projects/fence-panels-perth-dundee",
    },
    {
      src: "/gal_cutting_edge_03.jpg",
      alt: "Garden fencing and outdoor improvement project near Perth and Dundee",
      href: "/projects/garden-fencing-improvement",
    },
    {
      src: "/gal_cutting_edge_04.jpg",
      alt: "Completed fencing and landscaping work by Cutting Edge",
      href: "/projects/fencing-landscaping-perthshire",
    },
    {
      src: "/gal_cutting_edge_05.jpg",
      alt: "Tidy garden transformation and fence replacement project",
      href: "/projects/garden-transformation-perth",
    },
    {
      src: "/gal_cutting_edge_06.jpg",
      alt: "Outdoor fencing and garden work completed across Perthshire",
      href: "/projects/outdoor-fencing-perthshire",
    },
  ];

  return (
    <section id="projects" className="bg-transparent box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-4">
          <div className="box-border flex justify-center">
            <div className="box-border border border-neutral-500/40 px-3 py-1 rounded-[1000px]">
              <div className="font-medium leading-[22px] text-white">Gallery</div>
            </div>
          </div>
          <div className="box-border max-w-[760px] text-center mx-auto">
            <h2 className="text-white text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] uppercase">
              See Our Outdoor Work
            </h2>
          </div>
        </div>
        <div className="box-border grid auto-cols-[1fr] grid-cols-[1fr] gap-[18px] mt-10 md:grid-cols-[1fr_1fr_1fr] md:gap-5 md:mt-14">
          {images.map((image, index) => (
            <a
              key={image.src}
              href={image.href}
              aria-label={`View project: ${image.alt}`}
              className={`relative box-border overflow-hidden rounded-lg md:rounded-xl block hover:opacity-90 transition-opacity ${
                index === 0
                  ? "h-[400px] md:row-end-[span_2] md:row-start-[span_2] md:h-auto"
                  : "h-[277px]"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="inline-block h-full max-w-full object-cover w-full"
                loading={index < 3 ? "eager" : "lazy"}
              />
            </a>
          ))}
        </div>
        <div className="box-border mt-8 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center text-white bg-[#16a34a] border border-transparent px-6 py-4 rounded-[100px] hover:bg-white hover:text-black hover:border-[#16a34a] transition"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};
