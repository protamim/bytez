import {
  camera,
  galaxyZ,
  iphone14,
  headphone,
} from "@/assets/images/home/products";
import ProductCard from "../Home/ProductCard";
import RatingFilterButton from "./RatingFilterButton";

const ProductsArea = () => {
  return (
    <>
      <div>
        <div className="flex justify-between lg:mb-8">
          <h3 className="my-4">
            Products Result: <span className="font-bold">85</span>
          </h3>
          <div className="hidden lg:block">
            <RatingFilterButton />
          </div>
        </div>
        {/* Products container */}
        <div className="grid gap-x-3 gap-y-6 grid-cols-2 md:grid-cols-3">
          <ProductCard
            product={camera}
            productName="Apple Camera"
            price="$735"
          />
          <ProductCard
            product={galaxyZ}
            productName="Samsung Galaxy Z"
            price="$356"
          />
          <ProductCard
            product={iphone14}
            productName="Iphone 14"
            price="$425"
          />
          <ProductCard
            product={headphone}
            productName="Apple Airpods"
            price="$225"
          />
        </div>
      </div>
    </>
  );
};

export default ProductsArea;
