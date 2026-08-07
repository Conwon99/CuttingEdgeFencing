import { locations, getNearbyLocationLinks, type LocationPage } from "@/data/locations";
import { getServiceBySlug, type ServicePage } from "@/data/services";
import { truncateMeta } from "@/data/site";

export type TreeServiceFaq = {
  question: string;
  answer: string;
};

export type TreeServiceLocationPage = {
  locationSlug: string;
  serviceSlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localParagraph: string;
  bodyParagraph: string;
  faqs: TreeServiceFaq[];
  location: LocationPage;
  service: ServicePage;
};

type TreeServiceContentConfig = {
  slug: string;
  metaTemplate: (displayName: string) => string;
  introVariants: ((town: string) => string)[];
  localVariants: ((town: string, nearby: string[]) => string)[];
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => TreeServiceFaq[];
};

const treeServiceConfigs: TreeServiceContentConfig[] = [
  {
    slug: "tree-removal",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Safe tree removal in ${displayName} by Cutting Edge. Storm-damaged, leaning and unwanted trees taken down and cleared. Free quotes across Perthshire.`,
      ),
    introVariants: [
      (town) =>
        `Cutting Edge provides safe tree removal in ${town}, taking down storm-damaged, leaning and unwanted trees and clearing the branches and timber afterwards.`,
      (town) =>
        `Need a tree removed in ${town}? Cutting Edge takes down unstable, storm-damaged and unwanted trees safely, with the site left tidy and waste cleared.`,
      (town) =>
        `Cutting Edge helps homes and gardens in ${town} deal with problem trees, from a single leaning tree to several trees that need to come down.`,
    ],
    localVariants: [
      (town, nearby) =>
        `Mature trees close to boundaries, driveways and buildings are common around ${town}, and Scottish weather adds to the risk of storm damage. If you are searching for tree removal near ${town}, Cutting Edge covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
      (town, nearby) =>
        `Gardens around ${town} often have trees planted close to the house or boundary that become a problem as they grow. Cutting Edge covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}, removing trees safely and clearing the waste.`,
      (town, nearby) =>
        `Storm damage and overgrown trees are a regular concern for properties near ${town}. Cutting Edge serves ${town} and surrounding areas such as ${nearby.slice(0, 3).join(", ") || "nearby towns"}, with safe removal and a tidy finish.`,
    ],
    bodyTemplate: (town) =>
      `Cutting Edge removes whole trees, storm-damaged limbs and unstable trees for properties in ${town}. Each removal is planned around the tree's size, lean and surroundings so the work is carried out safely and neighbouring fences, buildings and gardens are protected. Branches and timber are cleared once the tree is down. If a tree just needs cutting back rather than full removal, tree cutting may be the better option. Contact Cutting Edge for a free tree removal quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you remove trees in ${town}?`,
        answer: `Yes. Cutting Edge removes whole trees, storm-damaged trees and unstable trees in ${town} and nearby areas, with free quotes available.`,
      },
      {
        question: `Can you take down a leaning or damaged tree in ${town}?`,
        answer: `Yes. Leaning, storm-damaged and unstable trees are assessed carefully before agreeing the safest removal method for your property in ${town}.`,
      },
      {
        question: `How do I get a tree removal quote in ${town}?`,
        answer: `Call Cutting Edge or use the contact form with a description of the tree and your location in ${town}. Photos help us respond quickly with a free quote.`,
      },
    ],
  },
  {
    slug: "tree-cutting",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Tree cutting and crown reduction in ${displayName} by Cutting Edge. Overgrown and overhanging trees cut back safely. Free quotes across Perthshire.`,
      ),
    introVariants: [
      (town) =>
        `Cutting Edge provides tree cutting and crown reduction in ${town}, cutting back overgrown and overhanging trees safely without the need for full removal.`,
      (town) =>
        `Need a tree cut back in ${town}? Cutting Edge reduces overgrown canopies and overhanging branches, making trees safer and easier to manage.`,
      (town) =>
        `Cutting Edge helps gardens in ${town} keep trees healthy and manageable with regular cutting back, crown reduction and shaping.`,
    ],
    localVariants: [
      (town, nearby) =>
        `Fast growth through the season means trees around ${town} often need cutting back to stay safe and manageable. Cutting Edge covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
      (town, nearby) =>
        `Overhanging branches and thick canopies are a common issue for gardens near ${town}. Cutting Edge serves ${town} and nearby towns including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}, cutting trees back safely and clearing the cuttings.`,
      (town, nearby) =>
        `Trees left unmanaged for a few years often need a bigger cut back, especially around ${town}. Cutting Edge also covers surrounding areas such as ${nearby.slice(0, 3).join(", ") || "nearby towns"}.`,
    ],
    bodyTemplate: (town) =>
      `Cutting Edge cuts back overgrown, overhanging and badly shaped trees for properties in ${town}, restoring light and reducing the risk of storm damage without removing the tree completely. Work is planned around how the tree has grown and how much reduction is needed, with cuttings and branches cleared once finished. If a tree is unsafe or too far gone to manage this way, tree removal may be the better option. Contact Cutting Edge for a free tree cutting quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you cut back overgrown trees in ${town}?`,
        answer: `Yes. Cutting Edge provides tree cutting and crown reduction in ${town} and nearby areas, with free quotes available.`,
      },
      {
        question: `Can you cut back branches overhanging a fence or roof in ${town}?`,
        answer: `Yes. Overhanging branches over roofs, fences and neighbouring gardens in ${town} can be cut back safely.`,
      },
      {
        question: `How do I get a tree cutting quote in ${town}?`,
        answer: `Call Cutting Edge or use the contact form with a description of the tree and your location in ${town}. Photos help us respond quickly with a free quote.`,
      },
    ],
  },
];

const buildTreeServiceLocationPage = (
  location: LocationPage,
  config: TreeServiceContentConfig,
  service: ServicePage,
  variantIndex: number,
): TreeServiceLocationPage => {
  const town = location.name;
  const displayName = location.shortName ?? location.name;
  const nearbyNames = location.nearby;
  const introTemplate = config.introVariants[variantIndex % config.introVariants.length];
  const localTemplate = config.localVariants[(variantIndex + 1) % config.localVariants.length];

  return {
    locationSlug: location.slug,
    serviceSlug: config.slug,
    title: `${service.title} in ${displayName} | Cutting Edge`,
    h1: `${service.title} in ${displayName}`,
    metaDescription: config.metaTemplate(displayName),
    intro: introTemplate(town),
    localParagraph: localTemplate(town, nearbyNames),
    bodyParagraph: config.bodyTemplate(town),
    faqs: config.faqTemplates(town),
    location,
    service,
  };
};

export const treeServiceLocationPages: TreeServiceLocationPage[] = locations.flatMap((location, locationIndex) =>
  treeServiceConfigs.map((config) => {
    const service = getServiceBySlug(config.slug)!;
    return buildTreeServiceLocationPage(location, config, service, locationIndex);
  }),
);

export const getTreeServiceLocationPage = (locationSlug: string, serviceSlug: string) =>
  treeServiceLocationPages.find(
    (page) => page.locationSlug === locationSlug && page.serviceSlug === serviceSlug,
  );

export const getTreeServiceLocationPath = (locationSlug: string, serviceSlug: string) =>
  `/locations/${locationSlug}/${serviceSlug}`;

export const getNearbyTreeServiceLinks = (
  page: TreeServiceLocationPage,
): Array<{ name: string; href: string }> => {
  const nearby = getNearbyLocationLinks(page.location);
  return nearby.slice(0, 4).map((loc) => ({
    name: loc.name,
    href: getTreeServiceLocationPath(loc.slug, page.serviceSlug),
  }));
};
