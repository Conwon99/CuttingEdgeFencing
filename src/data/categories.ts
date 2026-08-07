import { services, type ServicePage } from "@/data/services";

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
};

export const categories: ServiceCategory[] = [
  {
    slug: "fencing-perth-dundee",
    name: "Fencing",
    title: "Fencing in Perth & Dundee",
    description: "Fencing in Perth, Dundee & Perthshire: timber installation, panel replacement, fence repairs and disposal by Cutting Edge. Free quotes, tidy work.",
    intro: "Cutting Edge is a local fencing contractor installing and repairing wooden fencing for gardens, boundaries and commercial spaces across Perth, Dundee and the surrounding Perthshire and Tayside area. From new timber runs to storm-damaged panel repairs, fencing work is completed neatly with practical advice and free quotes.",
    localParagraph: "Properties across Perth, Dundee and nearby towns often need fencing that suits Scottish weather, sloping gardens and mixed boundary types. If you are searching for a fencing contractor near Perth, Cutting Edge works locally and can advise on the most practical fence style for your property.",
    image: "/gal_cutting_edge_01.jpg",
    imageAlt: "Timber garden fencing installed by Cutting Edge in Perthshire",
    serviceSlugs: ["fencing-installation-replacement", "fence-repairs-disposal"],
  },
  {
    slug: "tree-care-perth-dundee",
    name: "Tree Care",
    title: "Tree Care in Perth & Dundee",
    description: "Tree care, hedge removal and garden clearances in Perth, Dundee & Perthshire by Cutting Edge. Tidy workmanship, free quotes, no mess left behind.",
    intro: "Overgrown trees, hedges and garden waste can quickly take over outdoor spaces in Perth, Dundee and across Perthshire. Cutting Edge provides tree care, hedge removal and garden clearances so gardens feel safer, cleaner and easier to maintain, with free quotes on every job.",
    localParagraph: "Gardens across Perth, Dundee and Angus often deal with fast-growing hedges, storm-damaged branches and seasonal clear-up work. If you are searching for a tree care specialist or hedge removal near Perth, Cutting Edge helps local customers reclaim outdoor space without leaving a mess behind.",
    image: "/gal_cutting_edge_03.jpg",
    imageAlt: "Garden clearance and hedge removal by Cutting Edge",
    serviceSlugs: ["tree-care-hedge-removal", "tree-removal", "tree-cutting"],
  },
  {
    slug: "landscaping-perth-dundee",
    name: "Landscaping",
    title: "Landscaping in Perth & Dundee",
    description: "Landscaping & patio installation in Perth, Dundee & Perthshire by Cutting Edge. Turfing, gravel areas, garden makeovers. Free quotes available.",
    intro: "Cutting Edge helps turn tired or awkward gardens in Perth, Dundee and across Perthshire into cleaner, more useful outdoor spaces. Landscaping work can include turfing, patio installation, gravel areas, tidy-ups and practical improvements planned around how you use the garden, with free quotes on every job.",
    localParagraph: "From Perth city gardens to larger plots in Perthshire and coastal properties near Dundee, every outdoor space is different. If you are searching for a landscaping contractor near Perth or patio installation near Dundee, Cutting Edge plans the work around access, budget and how you want to use the garden.",
    image: "/gal_cutting_edge_05.jpg",
    imageAlt: "Landscaping and garden makeover by Cutting Edge",
    serviceSlugs: ["landscaping-garden-makeovers"],
  },
  {
    slug: "roof-cleaning-perth-dundee",
    name: "Roof Cleaning",
    title: "Roof Cleaning in Perth & Dundee",
    description: "Roof cleaning & de-mossing in Perth, Dundee & Perthshire by Cutting Edge. Hand-cleaned roofs, gutter clearing, treatments. Free quotes available.",
    intro: "Moss and debris can affect drainage, appearance and long-term roof condition on homes across Perth, Dundee and Perthshire. Cutting Edge provides hand-cleaned roof work, full de-mossing, gutter clearing and roof treatments to help protect your property, with free quotes on every job.",
    localParagraph: "Scottish weather means moss build-up is common on roofs across Perth, Dundee and Tayside. If you are searching for a roof cleaning specialist near Perth, careful hand cleaning helps water drain properly and improves kerb appeal.",
    image: "/gal_cutting_edge_04.jpg",
    imageAlt: "Roof cleaning and de-mossing by Cutting Edge",
    serviceSlugs: ["roof-cleaning-demossing"],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Garden Tidy-Up",
  "Other / Not Sure",
];
