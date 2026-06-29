// Canonical number: SSR, initial HTML, and Schema.org JSON-LD only.
export const CANONICAL_PHONE = "+44 7895 985606";
export const CANONICAL_PHONE_TEL = "+447895985606";
export const CANONICAL_PHONE_LOCAL = "07895 985606";

// Tracking number: client-side UI and tel: links after JavaScript loads.
export const TRACKING_PHONE = "+44 7886 083152";
export const TRACKING_PHONE_TEL = "+447886083152";
export const TRACKING_PHONE_LOCAL = "07886 083152";

export const formatPhoneDisplay = (phone: string): string => {
  if (phone.startsWith("+44")) {
    const cleaned = phone.replace("+44", "").replace(/\s/g, "");
    if (cleaned.length === 10) {
      return `+44 ${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
    }
    return `+44 ${cleaned}`;
  }
  return phone;
};

export const formatTrackingPhoneDisplay = (): string => formatPhoneDisplay(TRACKING_PHONE);
