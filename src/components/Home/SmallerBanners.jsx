import HTMLComment from "react-html-comment";
import { PlayStation, airpod, appleVision, macbookBody, macbookDisplay, } from "@/assets/images/home/smaller_banners";

const SmallerBanners = () => {
  return (
    <>
      <section>
        <div className="sm:grid sm:grid-cols-2 xl:grid-cols-4">
          <HTMLComment text=" Item 1 " /> {/* Item 1 */}
          <div className="flex flex-col items-center bg-primary gap-6 p-6 xl:order-3">
            <span className="max-w-sm">
              <img src={airpod} alt="bytez" />
            </span>
            <div className="space-y-4 flex flex-col items-center">
              <h3 className="text-2xl text-slate-900">Apple AirPods Max</h3>
              <p className="text-center text-sm text-gray-600 sm:max-w-sm">
                Computational audio. Listen, it&apos;s powerful
              </p>
            </div>
          </div>
          <HTMLComment text=" Item 2 " /> {/* Item 2  */}
          <div className="flex flex-col items-center bg-dark-100 gap-6 p-6 xl:order-4">
            <span className="max-w-sm">
              <img src={appleVision} alt="bytez" />
            </span>
            <div className="space-y-4 flex flex-col items-center">
              <h3 className="text-2xl text-slate-100">Apple Vision Pro</h3>
              <p className="text-center text-sm text-slate-400 sm:max-w-sm">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
          <HTMLComment text=" Item 3 " /> {/* Item 3  */}
          <div className="flex flex-col items-center bg-white gap-6 p-6  xl:order-1 xl:flex-row xl:col-span-2">
            <span className="max-w-sm">
              <img src={PlayStation} alt="bytez" />
            </span>
            <div className="space-y-4 flex flex-col items-center">
              <h3 className="text-2xl text-slate-900">Playstation 5</h3>
              <p className="text-center text-sm text-gray-600 sm:max-w-sm">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <HTMLComment text=" Item 4 " /> {/* Item 4  */}
          <div className="flex flex-col items-center bg-primary gap-6 p-6  xl:col-span-2 xl:row-span-2 xl:justify-center xl:order-2">
            <HTMLComment text=" Left Item " /> {/* Left Item  */}
            <div className="space-y-4 flex flex-col items-center order-2">
              <h3 className="text-2xl text-slate-900">Macbook Air</h3>
              <p className="text-center text-sm text-gray-600 sm:max-w-sm">
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <button className="border border-slate-800 rounded-md px-5 py-2 w-full hover:bg-slate-800 hover:text-white transition-colors ease-in-out duration-300">
                Shop Now
              </button>
            </div>
            <HTMLComment text=" Right Item " /> {/* Right Item  */}
            <div>
              <div className="max-w-sm">
                <span className="bg-black block pt-1 pl-1 pr-1 pb-3 rounded-md max-w-max mx-auto">
                  <img src={macbookDisplay} alt="" />
                </span>
                <span>
                  <img className="w-full" src={macbookBody} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmallerBanners;
