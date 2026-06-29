import { ContactForm } from "@/pages/contact/components/ContactForm";
import { PhoneLink } from "@/components/PhoneLink";

export const ContactFormSection = () => {
  return (
    <div className="box-border caret-transparent mb-[50px] md:mb-[70px]">
      <div className="bg-[#15803d] box-border caret-transparent p-4 sm:p-5 rounded-[20px] md:p-10 max-w-[800px] mx-auto border-2 border-[#15803d] shadow-lg">
        <div className="flex justify-center mb-5">
          <PhoneLink
            iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
            iconAlt="Phone icon - Call Cutting Edge"
            variant="hero"
            trackingLocation="contact-form"
          />
        </div>
        <div className="box-border caret-transparent mt-[30px] mb-[15px]">
          <ContactForm />
          <div
            role="region"
            aria-label="Contact Form success"
            className="text-white bg-[#15803d] box-border caret-transparent hidden text-center p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="Contact Form failure"
            className="text-white bg-[#16a34a] box-border caret-transparent hidden text-center mt-2.5 p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

