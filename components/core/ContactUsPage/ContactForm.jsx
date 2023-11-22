import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-brown-900 bg-brown-500 text-white rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
        Got an Issue? We&apos;ve got to solve it. Fill up your issue below!
      </h1> 
      <p className="">
        Tell us more about yourself and what is the issue that you&apos;ve got.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
