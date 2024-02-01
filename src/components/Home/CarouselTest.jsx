import { ipad, ipadPro, iphone14 } from "@/assets/images/home/products";
import { Button } from "../ui/button";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const products = [
  {
    image: ipad,
    title: "Ipad",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    image: ipadPro,
    title: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    image: iphone14,
    title: "Iphone 14",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    image: iphone14,
    title: "Iphone 14",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
];

const CarouselTest = () => {
  // Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 25,
    slidesToScroll: "auto",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  // Allow to scroll the next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  // Scroll to a snap point by its unique index.
  const snapPoints = useCallback(() => {
    if (emblaApi) console.log(emblaApi.scrollTo());

  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <>
      {/* Embla */}
      <section className="bg-lime-200 py-11">
        <div className="container px-0">
          <div>
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {/* Carousel Items */}
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 flex-grow-0 flex-shrink-0 basis-full md:basis-1/2"
                  >
                    <div className="max-w-52 mx-auto">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <h4 className="text-2xl font-bold">{product.title}</h4>
                      <p className="text-center text-sm text-dark-100">
                        {product.description}
                      </p>
                      <Button className="bg-transparent border border-black hover:bg-black hover:text-white">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={scrollPrev} className="embla__prev">
              Prev
            </button>
            <button onClick={scrollNext} className="embla__next ml-5">
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselTest;
