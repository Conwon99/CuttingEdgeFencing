export const SITE_URL = "https://cuttingedgelandscapingperth.co.uk";

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};
