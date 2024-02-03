import { FaMobileScreenButton } from "react-icons/fa6";
import { HiDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline, IoGameControllerOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import CategoryCard from "./CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Categories = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-5 bg-light-100 py-14">
          <div>
            {/* Category card */}
            <Carousel className="mx-auto">
              {/* Category Top */}
              <div className="relative flex justify-between items-center mb-10 gap-3">
                <h3 className="text-[1.3rem] font-bold sm:text-3xl">
                  Browse By Category
                </h3>
                <div className="flex gap-5 items-center justify-between">
                  <CarouselPrevious className="text-black border-none h-auto w-auto [&>svg]:h-auto [&>svg]:w-auto [&>svg]:text-xl sm:[&>svg]:text-2xl lg:[&>svg]:text-3xl static translate-y-0 top-auto right-auto" />
                  <CarouselNext className="text-black border-none h-auto w-auto [&>svg]:h-auto [&>svg]:w-auto [&>svg]:text-xl sm:[&>svg]:text-2xl lg:[&>svg]:text-3xl static translate-y-0 top-auto right-auto " />
                </div>
              </div>
              {/* Category Items */}
              <CarouselContent>
                <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <CategoryCard
                    title="Phones"
                    icon={<FaMobileScreenButton />}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <CategoryCard 
                  title="Smart Watches" 
                  icon={<BsSmartwatch />} />
                </CarouselItem>
                <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <CategoryCard 
                  title="Cameras" 
                  icon={<IoCameraOutline />} />
                </CarouselItem>
                <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <CategoryCard 
                  title="Headphones" 
                  icon={<FaHeadphonesAlt />} 
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <CategoryCard
                    title="Computers"
                    icon={<HiDesktopComputer />}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <CategoryCard
                    title="Gaming"
                    icon={<IoGameControllerOutline />}
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
