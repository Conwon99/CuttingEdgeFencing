export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you cover ${name}?`,
    answer: `Yes. Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in ${name} and nearby areas. Get in touch to confirm availability for your property.`,
  },
  {
    question: `What outdoor work do you carry out in ${name}?`,
    answer: `Cutting Edge helps customers in ${name} with fencing installation and repairs, hedge removal, garden clearances, landscaping, garden makeovers and roof cleaning.`,
  },
  {
    question: `How do I get a quote for work in ${name}?`,
    answer: `Contact Cutting Edge by phone or through the contact form with a brief description of the work and your location in ${name}. Photos of the area are helpful. Free quotes are available.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. Cutting Edge covers ${name} and surrounding towns across Perthshire and Tayside. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there a fencing contractor near ${name}?`,
    answer: `Yes. Cutting Edge is a local fencing contractor serving ${name} and nearby areas. We install and repair timber fencing, remove old panels and provide free quotes across Perthshire and Tayside.`,
  },
];

const locationEntries = [
  {
    slug: "dundee",
    name: "Dundee",
    title: "Fencing, Tree Care & Landscaping in Dundee",
    description: "Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in Dundee and surrounding communities.",
    intro: "For customers in Dundee, Cutting Edge provides reliable fencing, tree care, landscaping and exterior cleaning work with tidy workmanship and free quotes.",
    nearby: ["Broughty Ferry", "Monifieth", "Carnoustie", "Coupar Angus"],
  },
  {
    slug: "perth",
    name: "Perth",
    title: "Fencing, Tree Care & Landscaping in Perth",
    description: "Cutting Edge provides fencing installation, tree care, landscaping, garden tidy-ups, roof cleaning and de-mossing in Perth and nearby areas.",
    intro: "Cutting Edge helps homeowners and businesses in Perth with practical outdoor work, from new timber fencing and garden makeovers to hedge removal, tidy-ups and roof cleaning.",
    nearby: ["Scone", "Bridge of Earn", "Crieff", "Kinross"],
  },
  {
    slug: "broughty-ferry",
    name: "Broughty Ferry",
    title: "Fencing, Tree Care & Landscaping in Broughty Ferry",
    description: "Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in Broughty Ferry and nearby coastal areas.",
    intro: "Cutting Edge supports Broughty Ferry customers with fence replacement, garden improvements, hedge removal, tidy-ups and roof de-mossing.",
    nearby: ["Dundee", "Monifieth", "Carnoustie", "Coupar Angus"],
  },
  {
    slug: "carnoustie",
    name: "Carnoustie",
    title: "Fencing, Tree Care & Landscaping in Carnoustie",
    description: "Cutting Edge provides fencing installation, tree care, landscaping, garden tidy-ups and roof cleaning in Carnoustie and nearby Angus coastal areas.",
    intro: "In Carnoustie, Cutting Edge handles fencing, garden makeovers, tree care and outdoor cleaning for homes and local properties.",
    nearby: ["Monifieth", "Dundee", "Broughty Ferry", "Coupar Angus"],
  },
  {
    slug: "blairgowrie-and-rattray",
    name: "Blairgowrie and Rattray",
    shortName: "Blairgowrie",
    title: "Fencing, Tree Care & Landscaping in Blairgowrie and Rattray",
    description: "Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in Blairgowrie and Rattray and nearby Perthshire towns.",
    intro: "Cutting Edge helps Blairgowrie and Rattray customers with practical outdoor improvements, including fencing, hedge removal, garden tidy-ups and roof cleaning.",
    nearby: ["Alyth", "Coupar Angus", "Pitlochry", "Perth"],
  },
  {
    slug: "crieff",
    name: "Crieff",
    title: "Fencing, Tree Care & Landscaping in Crieff",
    description: "Cutting Edge provides fencing installation, tree care, landscaping, garden tidy-ups and roof cleaning in Crieff and surrounding areas.",
    intro: "For Crieff and nearby Perthshire locations, Cutting Edge provides tidy fencing, tree care, landscaping and roof cleaning services.",
    nearby: ["Auchterarder", "Perth", "Pitlochry", "Kinross"],
  },
  {
    slug: "auchterarder",
    name: "Auchterarder",
    title: "Fencing, Tree Care & Landscaping in Auchterarder",
    description: "Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in Auchterarder and surrounding Perthshire communities.",
    intro: "Cutting Edge supports Auchterarder customers with fence replacement, garden improvements, hedge removal, tidy-ups and roof de-mossing.",
    nearby: ["Crieff", "Perth", "Kinross", "Pitlochry"],
  },
  {
    slug: "kinross",
    name: "Kinross",
    title: "Fencing, Tree Care & Landscaping in Kinross",
    description: "Cutting Edge provides fencing installation, tree care, landscaping, garden tidy-ups and roof cleaning in Kinross and nearby Perthshire areas.",
    intro: "In Kinross, Cutting Edge handles fencing, garden makeovers, tree care and outdoor cleaning for homes and local properties.",
    nearby: ["Milnathort", "Perth", "Bridge of Earn", "Crieff"],
  },
  {
    slug: "scone",
    name: "Scone",
    title: "Fencing, Tree Care & Landscaping in Scone",
    description: "Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in Scone and nearby communities close to Perth.",
    intro: "Cutting Edge helps Scone customers with practical outdoor improvements, including fencing, hedge removal, garden tidy-ups and roof cleaning.",
    nearby: ["Perth", "Bridge of Earn", "Blairgowrie and Rattray", "Coupar Angus"],
  },
  {
    slug: "monifieth",
    name: "Monifieth",
    title: "Fencing, Tree Care & Landscaping in Monifieth",
    description: "Cutting Edge provides fencing installation, tree care, landscaping, garden tidy-ups and roof cleaning in Monifieth and nearby coastal communities.",
    intro: "For Monifieth and nearby coastal locations, Cutting Edge provides tidy fencing, tree care, landscaping and roof cleaning services.",
    nearby: ["Dundee", "Broughty Ferry", "Carnoustie", "Coupar Angus"],
  },
  {
    slug: "bridge-of-earn",
    name: "Bridge of Earn",
    title: "Fencing, Tree Care & Landscaping in Bridge of Earn",
    description: "Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in Bridge of Earn and nearby Perthshire villages.",
    intro: "Cutting Edge supports Bridge of Earn customers with fence replacement, garden improvements, hedge removal, tidy-ups and roof de-mossing.",
    nearby: ["Perth", "Scone", "Kinross", "Crieff"],
  },
  {
    slug: "pitlochry",
    name: "Pitlochry",
    title: "Fencing, Tree Care & Landscaping in Pitlochry",
    description: "Cutting Edge provides fencing installation, tree care, landscaping, garden tidy-ups and roof cleaning in Pitlochry and surrounding areas.",
    intro: "In Pitlochry, Cutting Edge handles fencing, garden makeovers, tree care and outdoor cleaning for homes and local properties.",
    nearby: ["Blairgowrie and Rattray", "Alyth", "Crieff", "Coupar Angus"],
  },
  {
    slug: "alyth",
    name: "Alyth",
    title: "Fencing, Tree Care & Landscaping in Alyth",
    description: "Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in Alyth and nearby Perthshire and Angus areas.",
    intro: "Cutting Edge helps Alyth customers with practical outdoor improvements, including fencing, hedge removal, garden tidy-ups and roof cleaning.",
    nearby: ["Blairgowrie and Rattray", "Coupar Angus", "Perth", "Pitlochry"],
  },
  {
    slug: "coupar-angus",
    name: "Coupar Angus",
    title: "Fencing, Tree Care & Landscaping in Coupar Angus",
    description: "Cutting Edge provides fencing installation, tree care, landscaping, garden tidy-ups and roof cleaning in Coupar Angus and nearby Tayside areas.",
    intro: "For Coupar Angus and nearby locations, Cutting Edge provides tidy fencing, tree care, landscaping and roof cleaning services.",
    nearby: ["Blairgowrie and Rattray", "Alyth", "Scone", "Perth"],
  },
  {
    slug: "milnathort",
    name: "Milnathort",
    title: "Fencing, Tree Care & Landscaping in Milnathort",
    description: "Cutting Edge provides fencing, tree care, landscaping, garden tidy-ups and roof cleaning in Milnathort and surrounding areas.",
    intro: "Cutting Edge supports Milnathort customers with fence replacement, garden improvements, hedge removal, tidy-ups and roof de-mossing.",
    nearby: ["Kinross", "Perth", "Bridge of Earn", "Crieff"],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Fencing & Garden Services in ${location.shortName ?? location.name} | Cutting Edge`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
