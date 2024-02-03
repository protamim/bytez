import { iphone14, smartWatch, watch } from "@/assets/images/home/products";
import ProductCard from "./ProductCard";
import { airpod } from "@/assets/images/home/smaller_banners";

const DiscountProducts = () => {
  return (
    <>
      <section>
        <div className="container py-10 px-5">
          <div>
            {/* Top */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold lg:text-2xl">Discounts up to -50%</h3>
            </div>
            {/* Products container */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ProductCard
                product={iphone14}
                productName="Iphone 14"
                price="$787"
              />
              <ProductCard
                product={airpod}
                productName="AirPods Max Silver"
                price="$487"
              />
              <ProductCard
                product={watch}
                productName="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
                price="$970"
              />
              <ProductCard
                product={smartWatch}
                productName="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
                price="$570"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscountProducts;
