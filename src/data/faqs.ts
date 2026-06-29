export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free quotes?",
    answer: "Yes. Contact Cutting Edge by phone or message with details of your fencing, tree care, landscaping, garden tidy-up or roof cleaning enquiry and we can discuss a free quote.",
  },
  {
    question: "What areas do you cover?",
    answer: "Cutting Edge serves Perth, Dundee, Broughty Ferry, Carnoustie, Monifieth, Crieff, Kinross, Pitlochry, Blairgowrie and Rattray and surrounding areas. If you are nearby, get in touch and we can confirm availability.",
  },
  {
    question: "Can you replace old fencing and dispose of waste?",
    answer: "Yes. Cutting Edge can replace old panel fencing, build new fencing and dispose of old fence materials as part of the job.",
  },
  {
    question: "Do you handle garden and landscaping work?",
    answer: "Yes. Cutting Edge handles garden transformations including hedge removal, turfing, patios, gravel areas, garden tidy-ups and outdoor improvements.",
  },
  {
    question: "Do you provide roof cleaning and de-mossing?",
    answer: "Yes. Cutting Edge provides hand-cleaned roof work, full de-mossing, gutter clearing and roof treatments.",
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
