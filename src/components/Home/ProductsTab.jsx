import ProductCard from "@/components/Home/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  blackWatch,
  camera,
  galaxyBuds,
  galaxyZ,
  headphone,
  ipad,
  iphone14,
  watch,
} from "@/assets/images/home/products";

const ProductsTab = () => {
  return (
    <>
      <section className="py-14">
        <div className="container mx-auto px-5">
          <Tabs defaultValue="NewArrival" className="overflow-hidden">
            <TabsList className="gap-3 lg:gap-6">
              <TabsTrigger
                value="NewArrival"
                className="data-[state=active]:border-b border-black text-gray-400 data-[state=active]:text-black text-sm sm:text-base lg:text-lg"
              >
                New Arrival
              </TabsTrigger>
              <TabsTrigger
                value="Bestseller"
                className="data-[state=active]:border-b border-black text-gray-400 data-[state=active]:text-black text-sm sm:text-base lg:text-lg"
              >
                Bestseller
              </TabsTrigger>
              <TabsTrigger
                value="FeaturedProducts"
                className="data-[state=active]:border-b border-black text-gray-400 data-[state=active]:text-black text-sm sm:text-base lg:text-lg"
              >
                Featured Products
              </TabsTrigger>
            </TabsList>
            {/* New Arrival Products */}
            <TabsContent
              value="NewArrival"
              className="grid gap-4 justify-between grid-cols-2 data-[state=inactive]:mt-0 sm:grid-cols-3 md:grid-cols-4 lg:mt-8 lg:gap-7 transition-all ease-in-out duration-700 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
            >
              <ProductCard
                product={iphone14}
                productName="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
                price="$900"
              />
              <ProductCard
                product={camera}
                productName="Blackmagic Pocket Cinema Camera 6k"
                price="$2535"
              />
              <ProductCard
                product={watch}
                productName="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
                price="$399"
              />
              <ProductCard
                product={headphone}
                productName="AirPods Max Silver"
                price="$549"
              />
              <ProductCard
                product={blackWatch}
                productName="Samsung Galaxy Watch6 Classic 47mm Black"
                price="$369"
              />
              <ProductCard
                product={galaxyZ}
                productName="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
                price="$1799"
              />
              <ProductCard
                product={galaxyBuds}
                productName="Galaxy Buds FE Graphite"
                price="$99.99"
              />
              <ProductCard
                product={ipad}
                productName={`Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`}
                price="$398"
              />
            </TabsContent>
            {/* Bestseller Products */}
            <TabsContent
              value="Bestseller"
              className="grid gap-4 justify-between grid-cols-2 data-[state=inactive]:mt-0 sm:grid-cols-3 md:grid-cols-4 lg:mt-8 lg:gap-7 transition-all ease-in-out duration-700 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
            >
              <ProductCard
                product={blackWatch}
                productName="Samsung Galaxy Watch6 Classic 47mm Black"
                price="$369"
              />
              <ProductCard
                product={ipad}
                productName={`Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`}
                price="$398"
              />
              <ProductCard
                product={watch}
                productName="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
                price="$399"
              />
              <ProductCard
                product={galaxyZ}
                productName="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
                price="$1799"
              />
            </TabsContent>
            {/* Featured Products Products */}
            <TabsContent
              value="FeaturedProducts"
              className="grid gap-4 justify-between grid-cols-2 data-[state=inactive]:mt-0 sm:grid-cols-3 md:grid-cols-4 lg:mt-8 lg:gap-7 transition-all ease-in-out duration-700 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
            >
              <ProductCard
                product={galaxyBuds}
                productName="Galaxy Buds FE Graphite"
                price="$99.99"
              />
              <ProductCard
                product={headphone}
                productName="AirPods Max Silver"
                price="$549"
              />
              <ProductCard
                product={iphone14}
                productName="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
                price="$900"
              />
              <ProductCard
                product={galaxyZ}
                productName="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
                price="$1799"
              />
              <ProductCard
                product={ipad}
                productName={`Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`}
                price="$398"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default ProductsTab;
