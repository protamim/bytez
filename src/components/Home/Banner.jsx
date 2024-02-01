import { bannerImage } from "@/assets/images/home/banner";
const Banner = () => {
  return (
    <>
      <div className="bg-slate-900 text-slate-400 transition-all ease-in-out duration-500">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-10 pt-20 lg:pt-10 max-h-[calc(100vh-3.5rem)] overflow-hidden lg:justify-between lg:max-h-none lg:h-[528px]">
            {/* Left column */}
            <div className="flex flex-col justify-center md:w-8/12 lg:w-auto md:items-start">
              <h5 className="text-2xl text-slate-400 text-center mb-5">
                Pro Beyond
              </h5>
              <h2 className="text-6xl text-center mb-8 font-light">
                IPhone 14 <span className="font-semibold">Pro</span>
              </h2>
              <p className="mb-7 text-center lg:text-left text-lg">
                Created to change everything for the better. For everyone
              </p>
              <button className="max-w-max mx-auto md:mx-0 px-6 py-2 border rounded-lg border-gray-200 text-white transition-all ease-in-out duration-300 hover:text-black hover:bg-gray-200">
                Shop Now
              </button>
            </div>
            {/* Right column */}
            <div className="md:w-4/12 lg:5/12 lg:h-full md:self-end">
              <img
                className="sm:max-w-sm md:max-w-full sm:mx-auto lg:w-60"
                src={bannerImage}
                alt="bytez"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
