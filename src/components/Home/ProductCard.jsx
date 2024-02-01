import { HiOutlineHeart } from "react-icons/hi2";
import { Button, buttonVariants } from "../ui/button";
const ProductCard = ({ product, productName, price }) => {
  return (
    <>
      <div className="relative bg-primary rounded-md py-3 px-2 flex gap-3 lg:gap-5 flex-col items-center justify-between lg:py-4 lg:px-5">
        {/* Wish Icon */}
        <span className="absolute top-3 right-3 text-dark-100 cursor-pointer lg:text-xl lg:top-4 lg:right-4">
          <HiOutlineHeart className="transition-colors ease-in-out hover:fill-red-600 hover:stroke-red-600" />
        </span>
        {/* Product Image */}
        <span className="w-24 mt-8 h-24 lg:w-36 lg:h-36">
          <img className="mx-auto" src={product} alt="" />
        </span>
        <h4 className="flex-grow text-xs text-center text-black lg:text-base">
          {productName}
        </h4>
        <p className="text-sm font-semibold lg:text-xl lg:leading-6">{price}</p>
        <Button className={buttonVariants({ variant: "fill", size: "fill" })}>
          Buy Now
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
