export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const services: ServicePage[] = [
  {
    slug: "fencing-installation-replacement",
    title: "Fencing Installation & Replacement",
    shortTitle: "Fencing Installation",
    navTitle: "Fencing",
    parentCategorySlug: "fencing-perth-dundee",
    description: "Professional fencing installation and panel replacement in Perth, Dundee and Perthshire. Timber fencing, repairs and disposal. Free quotes.",
    cardDescription: "New fencing, wooden fencing, panel replacement and tired fence upgrades completed neatly across Perth, Dundee and surrounding areas.",
    iconUrl: "/icon-fencing.svg",
    iconAlt: "Fencing service icon",
    image: "/gal_cutting_edge_01.jpg",
    imageAlt: "Timber garden fencing installed by Cutting Edge in Perthshire",
    about: "Cutting Edge installs and replaces wooden fencing, fence panels and tired boundary fencing for homes, gardens, farms and commercial spaces. Old fencing can be removed and disposed of so the space is left clean and ready to use.",
    why: "The team focuses on tidy workmanship, practical advice and fencing that suits the property rather than a one-size-fits-all approach.",
    signsYouNeed: "You may need new fencing if panels are rotting, leaning or missing after wind damage. Gaps in a boundary fence can affect privacy, security and how tidy the garden looks. If posts are loose, timber is splitting or the fence no longer sits level, replacement is often more cost-effective than repeated patch repairs. Waiting too long can let the problem spread to neighbouring panels and make disposal more awkward.",
    options: "Cutting Edge can install a full new timber fence run, replace tired panels section by section, or remove old fencing and start fresh. If only part of the boundary needs attention, fence repairs and disposal may be enough. For customers unsure where to start, a free quote helps compare repair versus replacement. See our fencing services in Perth and Dundee for the full range of installation and repair options.",
    localContext: "Properties across Perth, Dundee, Perthshire and Tayside often have sloping gardens, mixed soil conditions and fences exposed to strong winds. If you are searching for fencing companies near Perth and Dundee, Cutting Edge works across the area from Perth and Scone to Dundee, Monifieth and Broughty Ferry.",
    whatToExpect: "When you get in touch, Cutting Edge will discuss the fence style, access and condition of the existing boundary. A visit can be arranged if needed to measure up and provide a clear quote. Old materials can be removed where required, the area prepared, and new fencing installed neatly with the site left tidy.",
    whyChooseUs: "Cutting Edge offers free quotes, tidy workmanship and practical advice on the best fencing option for your property. Customers across Perth and Dundee recommend the team for reliable outdoor work, clear communication and a clean finish.",
    benefits: [
      "New timber fencing and replacement fence panels.",
      "Old fence removal and disposal included where needed.",
      "Practical solutions for gardens, boundaries and outdoor spaces.",
      "Free quotes across Perth, Dundee, Perthshire and nearby areas.",
    ],
    process: [
      "Discuss the fence style, access and condition of the existing boundary.",
      "Measure up and provide a clear quote for the fencing work.",
      "Remove old materials where required and prepare the area.",
      "Install the new fencing neatly and leave the site tidy.",
    ],
    faq: [
      {
        question: "Can you remove and dispose of old fencing?",
        answer: "Yes. Old fence panels and materials can be removed and disposed of as part of the replacement work.",
      },
      {
        question: "Do you repair individual fence sections?",
        answer: "Yes. If only part of the fence needs attention, Cutting Edge can advise whether repair or replacement is the better option.",
      },
    ],
  },
  {
    slug: "fence-repairs-disposal",
    title: "Fence Repairs & Disposal",
    shortTitle: "Fence Repairs",
    navTitle: "Fence Repairs",
    parentCategorySlug: "fencing-perth-dundee",
    description: "Fence repairs and old fencing disposal in Perth, Dundee and Perthshire. Storm damage, panel replacement and tidy workmanship. Free quotes.",
    cardDescription: "Repairs, replacement sections, old fence removal and disposal handled with tidy workmanship and practical advice.",
    iconUrl: "/icon-fence-repairs.svg",
    iconAlt: "Fence repairs service icon",
    image: "/gal_cutting_edge_02.jpg",
    imageAlt: "Wooden fence repair and garden boundary work by Cutting Edge",
    about: "Fence damage can quickly make a garden feel exposed or untidy. Cutting Edge handles fence repairs, replacement sections and disposal of old fencing materials across Perth, Dundee and surrounding areas.",
    why: "A focused repair can often restore privacy and security without replacing a full run of fencing.",
    signsYouNeed: "Storm damage, rotted posts and broken panels are common signs your fence needs repair. A leaning section can pull on the rest of the run and make the boundary unsafe. If old panels are stacked in the garden or disposal is part of the job, getting it handled in one visit saves time. Leaving damaged fencing too long can increase repair costs and affect kerb appeal.",
    options: "Cutting Edge can repair individual panels and posts, replace damaged sections, or remove old fencing entirely. For larger boundaries, fencing installation and replacement may be the better long-term option. Repairs suit storm damage, isolated rot and tired sections that still have sound posts. Disposal of old materials can be included in the quote.",
    localContext: "Wind exposure and wet ground are common around Perthshire and coastal areas near Dundee. If you need fence repair near Perth, Dundee or surrounding towns, Cutting Edge can assess storm damage and recommend the most practical repair or replacement. We cover Perth, Dundee, Crieff, Kinross and nearby areas.",
    whatToExpect: "Cutting Edge will inspect the damaged fencing, identify the cause and recommend repair or replacement. A clear quote is provided before work starts. Repairs or removals are carried out neatly and old materials cleared away where agreed.",
    whyChooseUs: "Cutting Edge gives straightforward advice on repair versus replacement, with tidy workmanship and free quotes. Local customers value practical solutions that restore privacy without unnecessary cost.",
    benefits: [
      "Repairs for damaged panels, posts and tired fence sections.",
      "Replacement sections matched to the practical needs of the space.",
      "Old fence disposal available as part of the job.",
      "Straightforward advice on repair versus replacement.",
    ],
    process: [
      "Inspect the damaged fencing and identify the cause of the problem.",
      "Recommend repair or replacement based on condition and value.",
      "Carry out the agreed repairs or removals.",
      "Clear old materials and leave the area tidy.",
    ],
    faq: [
      {
        question: "Can you repair storm-damaged fencing?",
        answer: "Yes. Cutting Edge can assess storm damage and recommend practical repairs or replacement sections.",
      },
      {
        question: "Do you take away old fence materials?",
        answer: "Yes. Disposal can be included in the quote where required.",
      },
      {
        question: "Do you offer fence repair near me in Perth or Dundee?",
        answer: "Yes. Cutting Edge provides fence repairs across Perth, Dundee, Perthshire and nearby towns. Contact us with your location and photos of the damage for a free quote.",
      },
    ],
  },
  {
    slug: "tree-care-hedge-removal",
    title: "Tree Care & Hedge Removal",
    shortTitle: "Tree Care",
    navTitle: "Tree Care",
    parentCategorySlug: "tree-care-perth-dundee",
    description: "Tree care, hedge removal and garden clearances in Perth, Dundee and Perthshire. Reclaim overgrown outdoor spaces. Free quotes available.",
    cardDescription: "Tree care, hedge removal, garden clearances and tidy-ups to help reclaim outdoor spaces and get gardens ready for the season.",
    iconUrl: "/icon-tree-care.svg",
    iconAlt: "Tree care and hedge removal service icon",
    image: "/gal_cutting_edge_03.jpg",
    imageAlt: "Garden clearance and outdoor tidy-up work by Cutting Edge",
    about: "Overgrown trees, hedges and garden waste can take over outdoor spaces. Cutting Edge provides tree care, hedge removal, garden clearances and tidy-ups for customers across Perthshire and Dundee.",
    why: "The goal is to make gardens safer, cleaner and easier to maintain without leaving customers with the mess.",
    signsYouNeed: "Overgrown hedges blocking light, branches touching the house or boundary, and piled garden waste are signs you need tree care or clearance work. Trees with dead wood or storm damage can become a safety concern. If the garden feels unusable or hard to maintain, a clearance or hedge removal can make a big difference. Leaving heavy growth too long makes the job harder and more expensive.",
    options: "Cutting Edge handles hedge removal, tree care, garden clearances and seasonal tidy-ups. Work is planned around access, waste removal and how much of the garden needs attention. For customers also improving the space afterwards, landscaping and garden makeovers can follow clearance work.",
    localContext: "Gardens across Perth, Dundee, Blairgowrie, Pitlochry and surrounding Perthshire towns often have fast-growing hedges and mature trees that need regular attention. Local weather can increase growth rates and storm damage. Cutting Edge works across the full service area with free quotes.",
    whatToExpect: "Cutting Edge reviews the trees, hedges or garden areas that need attention and agrees the safest, tidiest approach. Work is carried out carefully with the area cleared and left neat. Waste removal can be included where agreed.",
    whyChooseUs: "Customers recommend Cutting Edge for reliable garden clearance, tidy finishing and clear quotes. The team focuses on making outdoor spaces safer and easier to enjoy.",
    benefits: [
      "Tree care and hedge removal for overgrown spaces.",
      "Garden clearances and seasonal tidy-ups.",
      "Waste removal and neat finishing where agreed.",
      "Free quotes for properties across the local service area.",
    ],
    process: [
      "Review the trees, hedges or garden areas that need attention.",
      "Agree the safest and tidiest approach for the work.",
      "Carry out the cutting, removal or clearance.",
      "Tidy the work area and advise on next steps where helpful.",
    ],
    faq: [
      {
        question: "Can you clear an overgrown garden?",
        answer: "Yes. Cutting Edge handles garden clearances, tidy-ups and hedge removal to reclaim outdoor spaces.",
      },
      {
        question: "Do you cover Dundee as well as Perth?",
        answer: "Yes. The service area includes Perth, Dundee, Perthshire and nearby locations.",
      },
    ],
  },
  {
    slug: "tree-removal",
    title: "Tree Removal",
    shortTitle: "Tree Removal",
    navTitle: "Tree Removal",
    parentCategorySlug: "tree-care-perth-dundee",
    description: "Safe tree removal in Perth, Dundee and Perthshire by Cutting Edge. Storm-damaged, leaning and unwanted trees taken down and cleared. Free quotes.",
    cardDescription: "Whole trees, storm-damaged trees and unstable trees removed safely, with branches and timber cleared from site.",
    iconUrl: "/icon-tree-care.svg",
    iconAlt: "Tree removal service icon",
    image: "/gal_cutting_edge_03.jpg",
    imageAlt: "Tree removal and garden clearance work by Cutting Edge",
    about: "Cutting Edge removes whole trees, storm-damaged limbs and problem trees that have become unsafe or unmanageable. Whether it is a single tree blocking light, an unstable tree close to a building, or a garden that needs several trees taken down, work is carried out safely with the site left tidy and waste cleared.",
    why: "Removing a tree safely takes the right approach for its size, lean and surroundings — the priority is a safe, controlled removal that protects the property and anything nearby.",
    signsYouNeed: "You may need a tree removed if it is leaning, has dead or cracked branches, or roots are lifting paving, fences or drains nearby. Trees planted too close to a house can cause damage as they grow, and storm damage can leave a tree unstable even if it still looks intact. If a tree is blocking light across most of the garden or you are planning other work on the plot, removal is often the practical next step.",
    options: "Cutting Edge can remove single trees or several across a garden, take down storm-damaged or diseased trees, and clear the resulting branches and timber. For trees that just need cutting back rather than full removal, tree cutting may be the better option. Stump handling and waste removal can be included in the quote. See our tree care services in Perth and Dundee for the full range of tree and hedge work.",
    localContext: "Gardens across Perth, Dundee and Perthshire often have mature trees close to boundaries, driveways and buildings, and Scottish weather adds to the risk of storm damage. If you are searching for tree removal near Perth or Dundee, Cutting Edge works across the full service area and can advise whether removal or cutting back is the right call.",
    whatToExpect: "Cutting Edge will assess the tree, its lean, size and surroundings, and agree the safest way to take it down. Work is carried out with care around fences, buildings and neighbouring gardens, with branches and timber cleared once the tree is down.",
    whyChooseUs: "Cutting Edge offers straightforward advice on whether a tree needs full removal or can be safely cut back, with tidy workmanship and free quotes across Perth and Dundee.",
    benefits: [
      "Safe removal of whole trees, including storm-damaged and unstable trees.",
      "Multiple trees across a garden or plot removed in one visit.",
      "Branches, timber and waste cleared once the tree is down.",
      "Free quotes across Perth, Dundee, Perthshire and nearby areas.",
    ],
    process: [
      "Assess the tree's size, lean and surroundings.",
      "Agree the safest method for taking the tree down.",
      "Remove the tree with care around fences, buildings and neighbouring gardens.",
      "Clear branches, timber and waste from the site.",
    ],
    faq: [
      {
        question: "Do you remove large or leaning trees?",
        answer: "Yes. Cutting Edge assesses each tree's size and lean before agreeing the safest removal method.",
      },
      {
        question: "Can you clear the branches and timber afterwards?",
        answer: "Yes. Waste removal can be included as part of the tree removal quote.",
      },
      {
        question: "Do you remove storm-damaged trees?",
        answer: "Yes. Storm-damaged and unstable trees are a common reason for removal — get in touch and we can assess the risk.",
      },
    ],
  },
  {
    slug: "tree-cutting",
    title: "Tree Cutting",
    shortTitle: "Tree Cutting",
    navTitle: "Tree Cutting",
    parentCategorySlug: "tree-care-perth-dundee",
    description: "Tree cutting and crown reduction in Perth, Dundee and Perthshire by Cutting Edge. Overgrown and overhanging trees cut back safely. Free quotes.",
    cardDescription: "Overgrown and overhanging trees cut back and shaped safely, without the need for full removal.",
    iconUrl: "/icon-tree-care.svg",
    iconAlt: "Tree cutting service icon",
    image: "/gal_cutting_edge_03.jpg",
    imageAlt: "Tree cutting and crown reduction work by Cutting Edge",
    about: "Not every problem tree needs to come down. Cutting Edge cuts back overgrown, overhanging or badly shaped trees to make them safer and easier to manage, without removing them completely.",
    why: "Cutting a tree back can restore light, reduce the risk of storm damage and keep a tree healthy for longer than leaving it to grow unmanaged.",
    signsYouNeed: "Trees overhanging a roof, fence or neighbouring garden, thick canopies blocking light, and branches that have grown too heavy or unbalanced are all signs a tree needs cutting back. Trees left unmanaged for several years often need a bigger cut than one maintained regularly.",
    options: "Cutting Edge can reduce a tree's crown, cut back overhanging branches, and shape trees that have outgrown their space. If a tree is unsafe or too far gone to manage this way, tree removal may be the better option. See our tree care services in Perth and Dundee for the full range.",
    localContext: "Fast growth through the Perthshire growing season means trees near Perth and Dundee often need cutting back every few years to stay manageable and safe. If you are searching for tree cutting or crown reduction near Perth or Dundee, Cutting Edge covers the full local area.",
    whatToExpect: "Cutting Edge looks at how the tree has grown and what is causing the problem — light, overhang, weight — and agrees how much to cut back. Cuttings and branches are cleared once the work is finished.",
    whyChooseUs: "Cutting Edge gives honest advice on how much a tree needs cutting back, with tidy workmanship, waste cleared and free quotes across Perth and Dundee.",
    benefits: [
      "Crown reduction and cutting back for overgrown trees.",
      "Overhanging branches over roofs, fences and gardens cut back safely.",
      "Regular maintenance cuts to keep trees healthy and manageable.",
      "Free quotes across Perth, Dundee, Perthshire and nearby areas.",
    ],
    process: [
      "Assess how the tree has grown and what needs cutting back.",
      "Agree how much reduction or shaping is needed.",
      "Cut back branches and shape the tree safely.",
      "Clear cuttings and branches from the site.",
    ],
    faq: [
      {
        question: "Can you cut back a tree without removing it?",
        answer: "Yes. Tree cutting and crown reduction can make a tree safer and more manageable without taking it down completely.",
      },
      {
        question: "Do you cut back overhanging branches?",
        answer: "Yes. Branches overhanging roofs, fences or neighbouring gardens can be cut back safely.",
      },
      {
        question: "How often should trees be cut back?",
        answer: "It depends on the tree and how it's grown, but many gardens in Perth and Dundee benefit from cutting back every few years to stay manageable.",
      },
    ],
  },
  {
    slug: "landscaping-garden-makeovers",
    title: "Landscaping & Garden Makeovers",
    shortTitle: "Landscaping",
    navTitle: "Landscaping",
    parentCategorySlug: "landscaping-perth-dundee",
    description: "Landscaping, patio installation and garden makeovers in Perth, Dundee and Perthshire. Turfing, gravel areas and tidy-ups. Free quotes.",
    cardDescription: "Garden transformations including turfing, patios, gravel areas and outdoor improvements planned around your space.",
    iconUrl: "/icon-landscaping.svg",
    iconAlt: "Landscaping service icon",
    image: "/gal_cutting_edge_05.jpg",
    imageAlt: "Landscaping and garden makeover completed by Cutting Edge",
    about: "Cutting Edge helps turn neglected or awkward gardens into cleaner, more useful outdoor spaces. Landscaping work can include turfing, patios, gravel areas, tidy-ups and practical improvements.",
    why: "Every garden is different, so the work is planned around the space, access, budget and how the customer wants to use it.",
    signsYouNeed: "A tired lawn, muddy paths, unused corners and overgrown beds are signs your garden could benefit from landscaping. If the outdoor space feels impractical or hard to maintain, a makeover can improve how you use it. Poor drainage, uneven ground and lack of defined areas make gardens harder to enjoy through the season.",
    options: "Cutting Edge can help with turfing, patios, gravel areas, garden tidy-ups and broader makeovers. Work may follow hedge removal or clearance if the garden is overgrown. Each project is planned around access, materials and budget with a free quote before work starts.",
    localContext: "From Perth city gardens to larger plots in Perthshire and coastal gardens near Dundee, outdoor spaces vary widely. Sloping ground, clay soil and mixed sun exposure all affect landscaping and patio installation choices. If you are searching for landscaping near Perth or Dundee, Cutting Edge works locally across the full service area.",
    whatToExpect: "Cutting Edge talks through how the garden is used and what needs to change. The work is planned, the area prepared and landscaping completed to an agreed standard. The garden is left clean and ready to use.",
    whyChooseUs: "Cutting Edge offers practical garden ideas, tidy workmanship and free quotes. Customers value honest advice on what will work best for their space and budget.",
    benefits: [
      "Garden transformations for tired or unused spaces.",
      "Turfing, patios, gravel areas and outdoor improvements.",
      "Practical ideas for low-maintenance gardens.",
      "Tidy workmanship from preparation to finish.",
    ],
    process: [
      "Talk through how the garden is used and what needs to change.",
      "Plan the work around access, materials and budget.",
      "Prepare the area and complete the agreed landscaping.",
      "Leave the garden clean, practical and ready to enjoy.",
    ],
    faq: [
      {
        question: "Can you help plan a small garden makeover?",
        answer: "Yes. Cutting Edge can suggest practical improvements for small gardens, tired lawns and unused outdoor areas.",
      },
      {
        question: "Do you do patios and gravel areas?",
        answer: "Yes. Landscaping work can include patio installation, gravel areas, turfing and other outdoor improvements across Perth and Dundee.",
      },
      {
        question: "Do you offer patio installation near Perth or Dundee?",
        answer: "Yes. Cutting Edge provides patio installation and garden makeovers across Perth, Dundee and surrounding Perthshire towns. Get in touch for a free quote.",
      },
    ],
  },
  {
    slug: "roof-cleaning-demossing",
    title: "Roof Cleaning & De-Mossing",
    shortTitle: "Roof Cleaning",
    navTitle: "Roof Cleaning",
    parentCategorySlug: "roof-cleaning-perth-dundee",
    description: "Roof cleaning, de-mossing and gutter clearing in Perth, Dundee and Perthshire. Hand-cleaned roof treatments. Free quotes from Cutting Edge.",
    cardDescription: "Hand-cleaned roofs, full de-mossing, gutter clearing and roof treatments to help protect your property and improve kerb appeal.",
    iconUrl: "/icon-roof-cleaning.svg",
    iconAlt: "Roof cleaning service icon",
    image: "/gal_cutting_edge_04.jpg",
    imageAlt: "Roof cleaning and exterior property care by Cutting Edge",
    about: "Moss and debris can affect drainage, appearance and long-term roof condition. Cutting Edge provides hand-cleaned roof work, full de-mossing, gutter clearing and roof treatments.",
    why: "Careful roof cleaning can improve kerb appeal and help water move away from the property properly.",
    signsYouNeed: "Green moss on roof tiles, blocked gutters and dark streaks on the roof are signs cleaning may be needed. Moss holds moisture against tiles and can affect how rainwater drains away. If gutters overflow in heavy rain or the roof looks tired from the street, de-mossing and gutter clearing can help.",
    options: "Cutting Edge provides hand-cleaned roof work, full de-mossing, gutter clearing and roof treatments where agreed. The approach depends on roof type, access and how much build-up is present. A free quote explains what is recommended for your property.",
    localContext: "Damp Scottish weather makes moss build-up common on roofs across Perthshire and Tayside. Properties in Perth, Dundee, Pitlochry, Crieff and coastal areas often benefit from periodic roof cleaning. Cutting Edge works carefully with hand cleaning where appropriate.",
    whatToExpect: "Cutting Edge assesses the roof, gutters and access requirements, then agrees the safest cleaning approach. Moss and debris are removed by hand where appropriate, gutters cleared and treatments applied where agreed.",
    whyChooseUs: "Cutting Edge offers careful hand cleaning, free quotes and tidy finishing. Customers value a practical approach that improves appearance and drainage without unnecessary work.",
    benefits: [
      "Hand-cleaned roof work and full de-mossing.",
      "Gutter clearing and roof treatments available.",
      "Improved appearance and better drainage.",
      "Free quotes across Perth, Dundee and surrounding areas.",
    ],
    process: [
      "Assess the roof, gutters and access requirements.",
      "Agree the safest cleaning and de-mossing approach.",
      "Remove moss and debris by hand where appropriate.",
      "Clear gutters and apply treatments where agreed.",
    ],
    faq: [
      {
        question: "Do you clean roofs by hand?",
        answer: "Yes. Cutting Edge provides hand-cleaned roof work and full de-mossing services.",
      },
      {
        question: "Can gutter clearing be included?",
        answer: "Yes. Gutter clearing and roof treatments can be included depending on what the property needs.",
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: "Request a free quote from Cutting Edge for fencing, tree care, landscaping or roof cleaning across Perth, Dundee and Perthshire.",
    cardDescription: "Message or call Cutting Edge to discuss fencing, garden, landscaping or roof cleaning work and arrange a free quote.",
    iconUrl: "/icon-free-quotes.svg",
    iconAlt: "Free quote service icon",
    image: "/gal_cutting_edge_06.jpg",
    imageAlt: "Outdoor fencing and garden work completed by Cutting Edge",
    about: "If you are not sure where to start, send Cutting Edge a message or call with a few details about the work. The team can discuss fencing, tree care, landscaping, garden tidy-ups, roof cleaning and de-mossing.",
    why: "A quick conversation helps clarify the work, the service area and whether a visit is needed before quoting.",
    signsYouNeed: "If you know work is needed but are unsure of scope, cost or timing, a free quote is the best first step. Photos of the area, a brief description and your location help Cutting Edge respond quickly with practical advice.",
    options: "Cutting Edge quotes for fencing installation, fence repairs, tree care, landscaping, garden tidy-ups and roof cleaning. You can call, message through the contact form or email with details. No obligation quotes help you compare options before committing.",
    localContext: "Cutting Edge covers Perth, Dundee and towns across Perthshire and Tayside including Broughty Ferry, Carnoustie, Crieff, Kinross and Pitlochry. If you are nearby, get in touch to confirm coverage.",
    whatToExpect: "Send a message or call with the service you need. Share photos if helpful. Cutting Edge will discuss the job, confirm the service area and arrange a visit or quote as needed.",
    whyChooseUs: "Free quotes, clear next steps and local service across Perth and Dundee. Customers appreciate honest advice before work begins.",
    benefits: [
      "Free quotes for fencing, gardens, trees and roof cleaning.",
      "Clear next steps before work starts.",
      "Local service across Perth, Dundee and Perthshire.",
      "Helpful advice on the most practical option for the job.",
    ],
    process: [
      "Send a message or call with the service you need.",
      "Share photos or details if they help explain the job.",
      "Arrange a visit or quote where required.",
      "Agree the work, timing and practical details before starting.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: "A short description, location and photos of the work area are helpful, especially for fencing, garden clearance and roof cleaning enquiries.",
      },
      {
        question: "Which areas do you quote for?",
        answer: "Cutting Edge covers Perth, Dundee, Broughty Ferry, Carnoustie, Monifieth, Crieff, Kinross, Pitlochry and surrounding areas.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
