import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 items-center max-w-5xl mx-auto">
      <div className="flex flex-col gap-4 py-24 text-[#486A6F] ">
        <div className="flex flex-col   ">
          <p className="text-[#5BCCDE] text-sm">contact</p>
          <h1 className="">Get in Touch</h1>
        </div>
        <div className="flex items-center gap-4">
          <img src="/assets/phone.svg" alt="" />
          <div className="flex flex-col items-start">
            <small className="text-sm ">Tel</small>
            <p className="">708-790-0000</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/assets/email.svg" alt="" />
          <div className="flex flex-col items-start">
            <small className="text-sm ">Email</small>
            <p className="">sales@buildit.site</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/assets/email.svg" alt="" />
          <div className="flex flex-col items-start">
            <small className="text-sm ">Office</small>
            <p className="">
              60 Manor Station St.
              <br /> Fairport, NY 14450
            </p>
          </div>
        </div>
      </div>
      <div>
        <form>
          <div className="bg-[#E1EBFA] rounded-sm p-5 m-8 shadow-xl ">
            <div className="grid grid-cols-2 gap-4 ">
               
              <input
                text="Name"
                className="bg-[#E1EBFA] border border-[#486A6F] outline-none"
              />
             
              <input
                label="Email"
                className="bg-[#E1EBFA] border border-[#486A6F] outline-none"
              />
              <div className="col-span-2">
                <input
                  type="text"
                  label="Subject"
                  className=" w-full bg-[#E1EBFA] border border-[#486A6F] outline-none"
                />
              </div>
              <div className="col-span-2">
                <textarea className="w-full bg-[#E1EBFA] border  border-[#486A6F] outline-none"></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
