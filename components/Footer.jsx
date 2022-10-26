import React from "react";

const Footer = () => {
  return (
    <footer className="text-[#F4F7FF] bg-[#486A6F]">
      <div className="max-w-5xl gap-6 grid grid-cols-4 mx-auto py-12 px-3">
        <div className="flex flex-col justify-between h-36">
          <div>
            <p>Buildit</p>
            <h1>Development company, 2022</h1>
          </div>
          <p>Site design – ⏰ Alarm</p>
        </div>
        <div className="flex flex-col gap-5 list-none font-bold text-sm">
          <li>Service 1</li>
          <li>Service 1</li>
          <li>Service 1</li>
          <li>Service 1</li>
        </div>
        <div className="flex flex-col gap-5 list-none font-bold text-sm">
          <li>About us</li>
          <li>Service</li>
          <li>Projects</li>
          <li>Contacts</li>
        </div>
        <div className="flex flex-col gap-5 list-none font-bold text-sm">
          <li>Get in touch</li>
          <li>60 Manor Station St. Fairport, NY 14450</li>
          <li>708-790-0000 sales@buildit.site</li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
