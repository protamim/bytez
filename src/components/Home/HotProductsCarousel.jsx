import { ipadPro, macbookPro, samsung, smartWatch } from "@/assets/images/home/products";
import { Button } from "../ui/button";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const products = [
  {
    image: smartWatch,
    title: "Smart Watch",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    color: "#f4f6f4",
  },
  {
    image: ipadPro,
    title: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    color: "#e1e1e199",
  },
  {
    image: samsung,
    title: "Samsung Galaxy",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    color: "#a7a7a388",
  },
  {
    image: macbookPro,
    title: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    color: "#ccffdc",
  },
];

const HotProductsCarousel = () => {
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 25,
    slidesToScroll: "auto",
  });

  // get the SnapsList
  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  // get the selected index
  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  // Scroll to by its index
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <section>
        <div className="container px-0 bg-light-100 pb-8">
          <div>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {/* Carousel Items */}
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-4 flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/4 bg-[${product.color}]`}
                    style={{backgroundColor: `${product.color}`}}
                  >
                    <div className="max-w-52 mx-auto flex-1">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <h4 className="text-center md:text-left text-2xl font-bold">
                        {product.title}
                      </h4>
                      <p className="text-center md:text-left text-sm text-dark-100 max-w-xs mx-auto md:mx-0">
                        {product.description}
                      </p>
                      <Button className="bg-transparent w-1/2 mx-auto md:mx-0 border border-black transition-colors ease-in-out duration-500 hover:bg-black hover:text-white">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Dot Navigations */}
            <div className="relative flex justify-center items-center gap-4 mt-12">
              {scrollSnaps.map((_, index) => (
                <span
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-1 w-4 rounded-xl cursor-pointer transition-colors ease-in-out duration-500 ${
                    index === selectedIndex ? "bg-black" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotProductsCarousel;
