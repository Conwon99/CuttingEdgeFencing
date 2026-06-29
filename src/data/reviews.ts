/** Total reviews across Google and Facebook — carousel shows a sample */
export const TOTAL_REVIEW_COUNT = 21;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [
  {
    name: "Catherine Wilkie",
    meta: "Facebook review",
    time: "recommended",
    initial: "C",
    initialBg: "bg-green-600",
    text: "Wonderful service from Brad. Reliable and very efficient and leaves the place immaculate. Can't thank you enough for such a great service.",
  },
  {
    name: "Jo Bellshaw",
    meta: "Facebook review",
    time: "recommended",
    initial: "J",
    initialBg: "bg-emerald-500",
    text: "Very responsive, quick and reasonably priced. Also very tidy workers, no mess left at all. Thanks guys!",
  },
  {
    name: "Michelle Davidson",
    meta: "Facebook review",
    time: "recommended",
    initial: "M",
    initialBg: "bg-lime-600",
    text: "Brad and his guys provided an absolute top notch service. They completed our back and front fence to such great quality and we are very pleased with the outcome.",
  },
  {
    name: "Fiona McGlashan",
    meta: "Facebook review",
    time: "recommended",
    initial: "F",
    initialBg: "bg-teal-600",
    text: "Professional, honest quote and the work was completed quickly but to a very high standard of workmanship. Absolutely delighted with the final result.",
  },
];
