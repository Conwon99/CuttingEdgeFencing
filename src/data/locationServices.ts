import { categories, getServicesForCategory, type ServiceCategory } from "@/data/categories";
import { locations, getNearbyLocationLinks, type LocationPage } from "@/data/locations";
import { truncateMeta } from "@/data/site";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type LocationServicePage = {
  locationSlug: string;
  categorySlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localParagraph: string;
  bodyParagraph: string;
  faqs: LocationServiceFaq[];
  location: LocationPage;
  category: ServiceCategory;
};

type CategoryContentConfig = {
  slug: string;
  serviceName: string;
  serviceNameLower: string;
  titleSuffix: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const categoryConfigs: CategoryContentConfig[] = [
  {
    slug: "fencing-perth-dundee",
    serviceName: "Fencing",
    serviceNameLower: "fencing",
    titleSuffix: "Fencing",
    contractorPhrase: "fencing contractor",
    nearMePhrase: "fencing companies near me",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Professional fencing in ${displayName} by Cutting Edge. Timber installation, fence repairs, panel replacement and disposal. Free quotes across Perthshire.`,
      ),
    introTemplate: (town) =>
      `Cutting Edge provides professional fencing installation, replacement and repairs in ${town}. Whether you need new timber fencing, panel replacement, fence repairs or old fence disposal, work is completed neatly with free quotes.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} often need fencing that suits local weather, sloping gardens and boundary types. If you are searching for a fencing contractor near ${town}, Cutting Edge covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}. Wooden fencing, privacy fencing and fence replacement are planned around access and how the garden is used.`,
    bodyTemplate: (town) =>
      `From full fence runs to storm-damaged panel repairs, Cutting Edge helps customers in ${town} with practical fencing solutions. Old fencing can be removed and disposed of where needed. Fence repairs may suit smaller jobs; replacement is often better when panels are rotting or posts are loose. Contact Cutting Edge for a free quote and clear advice on the best option for your property in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you provide fencing in ${town}?`,
        answer: `Yes. Cutting Edge installs and repairs timber fencing in ${town} and nearby areas. Free quotes are available for new fencing, panel replacement and fence repairs.`,
      },
      {
        question: `Can you repair fences in ${town}?`,
        answer: `Yes. Cutting Edge handles fence repairs, replacement sections and disposal of old fencing materials in ${town}. If you are searching for fence repair near ${town}, get in touch with photos of the damage for a quicker quote.`,
      },
      {
        question: `How do I get a fencing quote in ${town}?`,
        answer: `Call Cutting Edge or use the contact form with a brief description of the fencing work and your location in ${town}. Photos of the boundary are helpful. There is no obligation to proceed.`,
      },
    ],
  },
  {
    slug: "tree-care-perth-dundee",
    serviceName: "Tree Care",
    serviceNameLower: "tree care",
    titleSuffix: "Tree Care & Hedge Removal",
    contractorPhrase: "tree care specialist",
    nearMePhrase: "hedge removal near me",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Professional tree care and hedge removal in ${displayName} by Cutting Edge. Garden clearances, tidy-ups and outdoor work. Free quotes across Perthshire.`,
      ),
    introTemplate: (town) =>
      `Cutting Edge provides tree care, hedge removal and garden clearances in ${town}. Overgrown hedges, storm-damaged branches and cluttered gardens can be cleared with tidy workmanship and free quotes.`,
    localTemplate: (town, nearby) =>
      `Gardens in ${town} and across Perthshire often deal with fast-growing hedges, seasonal clear-up work and trees exposed to wind. If you need hedge removal near ${town} or a tree care specialist for your property, Cutting Edge serves ${town} and surrounding areas including ${nearby.slice(0, 3).join(", ") || "nearby towns"}.`,
    bodyTemplate: (town) =>
      `Cutting Edge helps reclaim outdoor space in ${town} through hedge removal, tree care and garden clearances. Work is planned around access, disposal and how you want the garden to look afterwards. Whether one overgrown hedge or a wider tidy-up is needed, the team leaves the area clean and ready to use. Contact Cutting Edge for a free quote for tree care work in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer hedge removal in ${town}?`,
        answer: `Yes. Cutting Edge provides hedge removal, tree care and garden clearances in ${town} and nearby areas. Get in touch to discuss the size of the job and arrange a free quote.`,
      },
      {
        question: `Can you clear overgrown gardens in ${town}?`,
        answer: `Yes. Garden clearances and tidy-ups are available in ${town}. Cutting Edge can help reclaim neglected outdoor space with practical advice and tidy workmanship.`,
      },
      {
        question: `How do I book tree care work in ${town}?`,
        answer: `Contact Cutting Edge by phone or through the contact form with details of the hedge, tree or clearance work and your location in ${town}. Photos help us respond quickly.`,
      },
    ],
  },
  {
    slug: "landscaping-perth-dundee",
    serviceName: "Landscaping",
    serviceNameLower: "landscaping",
    titleSuffix: "Landscaping & Garden Makeovers",
    contractorPhrase: "landscaping contractor",
    nearMePhrase: "landscaping near me",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Landscaping and patio installation in ${displayName} by Cutting Edge. Garden makeovers, turfing, gravel areas and tidy-ups. Free quotes across Perthshire.`,
      ),
    introTemplate: (town) =>
      `Cutting Edge provides landscaping and garden makeovers in ${town}, including turfing, patio installation, gravel areas and practical garden improvements. Work is planned around your space, budget and how you use the garden.`,
    localTemplate: (town, nearby) =>
      `Every garden in ${town} is different — from compact plots to larger outdoor spaces. If you are searching for landscaping near ${town} or patio installation in ${town}, Cutting Edge covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}. Turfing, patios, gravel and garden tidy-ups are completed with a clean finish.`,
    bodyTemplate: (town) =>
      `Cutting Edge helps turn tired gardens in ${town} into cleaner, more useful outdoor spaces. Landscaping work can follow hedge removal or clearance if the garden is overgrown. Patio installation, turfing and gravel areas are planned around access and materials. Whether you need a full garden makeover or a focused improvement, contact Cutting Edge for a free landscaping quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you do patio installation in ${town}?`,
        answer: `Yes. Cutting Edge provides patio installation, turfing, gravel areas and garden makeovers in ${town}. Contact us to discuss your garden and arrange a free quote.`,
      },
      {
        question: `Can you landscape gardens in ${town}?`,
        answer: `Yes. Landscaping and garden makeover work is available in ${town} and nearby areas. Cutting Edge plans each project around access, budget and how you want to use the outdoor space.`,
      },
      {
        question: `How do I get a landscaping quote in ${town}?`,
        answer: `Call or message Cutting Edge with a description of the landscaping work and your location in ${town}. Photos of the garden are helpful. Free quotes are available with no obligation.`,
      },
    ],
  },
  {
    slug: "roof-cleaning-perth-dundee",
    serviceName: "Roof Cleaning",
    serviceNameLower: "roof cleaning",
    titleSuffix: "Roof Cleaning & De-Mossing",
    contractorPhrase: "roof cleaning specialist",
    nearMePhrase: "roof cleaning near me",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Roof cleaning and de-mossing in ${displayName} by Cutting Edge. Hand-cleaned roof work, gutter clearing and treatments. Free quotes across Perthshire.`,
      ),
    introTemplate: (town) =>
      `Cutting Edge provides roof cleaning, de-mossing and gutter clearing in ${town}. Hand-cleaned roof work helps improve drainage, protect the roof and keep properties looking their best across Perthshire and Tayside.`,
    localTemplate: (town, nearby) =>
      `Scottish weather means moss build-up is common on roofs in ${town} and surrounding areas. If you need roof cleaning near ${town} or de-mossing for your property, Cutting Edge serves ${town} and nearby towns including ${nearby.slice(0, 3).join(", ") || "the local area"}. Careful hand cleaning helps water drain properly and improves kerb appeal.`,
    bodyTemplate: (town) =>
      `Cutting Edge provides hand-cleaned roof work, full de-mossing, gutter clearing and roof treatments for properties in ${town}. Removing moss and debris can help protect the roof and improve how the property looks from the street. Work is carried out carefully with a free quote before anything starts. Contact Cutting Edge for roof cleaning in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer roof cleaning in ${town}?`,
        answer: `Yes. Cutting Edge provides roof cleaning, de-mossing and gutter clearing in ${town} and nearby areas. Get in touch for a free quote.`,
      },
      {
        question: `Is de-mossing available in ${town}?`,
        answer: `Yes. Full de-mossing and hand-cleaned roof work is available in ${town}. Cutting Edge can advise on the best approach for your roof type.`,
      },
      {
        question: `How do I get a roof cleaning quote in ${town}?`,
        answer: `Contact Cutting Edge with your location in ${town} and a brief description of the roof work needed. Photos from ground level can help. Free quotes are available.`,
      },
    ],
  },
];

const buildLocationServicePage = (
  location: LocationPage,
  config: CategoryContentConfig,
  category: ServiceCategory,
): LocationServicePage => {
  const town = location.name;
  const displayName = location.shortName ?? location.name;
  const nearbyNames = location.nearby;

  return {
    locationSlug: location.slug,
    categorySlug: config.slug,
    title: `${config.titleSuffix} in ${displayName} | Cutting Edge`,
    h1: `${config.titleSuffix} in ${displayName}`,
    metaDescription: config.metaTemplate(displayName),
    intro: config.introTemplate(town),
    localParagraph: config.localTemplate(town, nearbyNames),
    bodyParagraph: config.bodyTemplate(town),
    faqs: config.faqTemplates(town),
    location,
    category,
  };
};

export const locationServicePages: LocationServicePage[] = locations.flatMap((location) =>
  categoryConfigs.map((config) => {
    const category = categories.find((item) => item.slug === config.slug)!;
    return buildLocationServicePage(location, config, category);
  }),
);

export const getLocationServicePage = (locationSlug: string, categorySlug: string) =>
  locationServicePages.find(
    (page) => page.locationSlug === locationSlug && page.categorySlug === categorySlug,
  );

export const getLocationServicePagesForLocation = (locationSlug: string) =>
  locationServicePages.filter((page) => page.locationSlug === locationSlug);

export const getLocationServicePagesForCategory = (categorySlug: string) =>
  locationServicePages.filter((page) => page.categorySlug === categorySlug);

export const getNearbyLocationServiceLinks = (
  page: LocationServicePage,
): Array<{ name: string; href: string }> => {
  const nearby = getNearbyLocationLinks(page.location);
  return nearby.slice(0, 4).map((loc) => ({
    name: loc.name,
    href: `/locations/${loc.slug}/${page.categorySlug}`,
  }));
};

export const getLocationServicePath = (locationSlug: string, categorySlug: string) =>
  `/locations/${locationSlug}/${categorySlug}`;

export const getServicesForLocationServicePage = (page: LocationServicePage) =>
  getServicesForCategory(page.category);
