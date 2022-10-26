import React from "react";

const about = () => {
  return (
    <div>
      <div className="bg-[#E1EBFA] py-7 text-[#486A6F] ">
        <div className="max-w-6xl my-4 mx-auto px-3 mt-24">
          <div className="grid grid-cols-2 gap-6 p-20">
            <div className="flex relative items-center justify-center ">
              <div>
                <img src="/assets/Rectangle 152.png" className="w-4/5" alt="" />
              </div>
              <div className="absolute bottom-0 translate-x-[50%] translate-y-[25%]">
                <img src="/assets/Rectangle 151.png" className="w-4/5" alt="" />
              </div>
            </div>
            <div>
              <h4 className="text-sm  my-3">About</h4>
              <h4 className="text-xl font-bold  leading-[50px]">
                Owner and investor with a reputation
              </h4>
              <p className="text-sm my-5 leading-7 text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-[#486A6F] mt-24 justify-center">
        <div className="flex flex-col items-center py-2 gap-2">
          <p className="text-[#5BCCDE]">statistics</p>
          <h1 className="font-bold text-xl">Development in numbers</h1>
        </div>
        <img src="/assets/cardl.png" />
      </div>
      <div>
        <img src="/assets/Logos.png" alt="" />
      </div>
    </div>
  );
};

export default about;
