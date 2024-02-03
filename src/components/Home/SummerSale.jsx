import {
  summerSale_1,
  summerSale_2,
  summerSale_3,
  summerSale_4,
} from "@/assets/images/home/products";
import { Button } from "../ui/button";

const SummerSale = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="overflow-hidden container relative bg-gradient-to-t from-dark-100 to-black py-24">
          <div className="flex flex-col gap-8 items-center justify-center">
            <div className="space-y-4">
              <h2 className="text-white text-4xl font-light text-center lg:text-5xl">
                Big Summer <span className="font-bold">Sale</span>
              </h2>
              <p className="text-gray-400 text-sm text-center max-w-xs mx-auto">
                Commodo fames vitae vitae leo mauris in. Eu consequat.
              </p>
            </div>
            <Button className="max-w-max mx-auto md:px-8 lg:px-14 bg-transparent text-white border border-light-100 transition-colors ease-in-out duration-300 hover:text-black hover:bg-white">
              Shop Now
            </Button>
            {/* Floating Images */}
            {/* Screen */}
            <img
              className="absolute left-0 top-0 w-28 md:w-36 lg:w-48 lg:left-2 lg:top-10 lg:z-10"
              src={summerSale_1}
              alt="Summer Sale 2024"
            />
            {/* Tablet */}
            <img
              className="absolute -bottom-3 right-0 w-28 md:w-40 md:bottom-0 lg:left-0 lg:w-64 lg:bottom-5"
              src={summerSale_2}
              alt="Summer Sale 2024"
            />
            {/* Iphone */}
            <img
              className="absolute w-14 right-0 -top-2 -rotate-[46deg] md:w-20 md:-rotate-[55deg] md:-top-4 lg:w-24"
              src={summerSale_3}
              alt="Summer Sale 2024"
            />
            {/* Watch */}
            <img
              className="absolute -bottom-6 -left-4 w-28 md:w-40 md:-bottom-3 lg:-right-4 lg:left-auto lg:w-56 xl:w-60"
              src={summerSale_4}
              alt="Summer Sale 2024"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SummerSale;
