import FilterButton from "@/components/shopPage/FilterButton";
import FilterPanel from "@/components/shopPage/FilterPanel";
import ProductsArea from "@/components/shopPage/ProductsArea";
import RatingFilterButton from "@/components/shopPage/RatingFilterButton";

const ShopPage = () => {
  return (
    <>
      <div className="relative container py-12">
        {/* For mobile and tablet */}
        <div className="lg:hidden flex space-x-8 items-center">
          <FilterButton />
          <RatingFilterButton />
        </div>

        {/* For Laptop and desktop */}
        <div className="grid gap-x-6 grid-cols-12 overflow-hidden">
          <div className="col-span-3">
            <FilterPanel />
          </div>
          <div className="hidden lg:block col-span-9">
            <ProductsArea />
          </div>
        </div>
        {/* Products Area for mobile */}
        <div className="lg:hidden">
          <ProductsArea />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
