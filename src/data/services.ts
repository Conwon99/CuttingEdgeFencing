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
