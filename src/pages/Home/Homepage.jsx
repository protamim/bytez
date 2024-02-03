import HTMLComment from "react-html-comment";
import Banner from "@/components/Home/Banner";
import SmallerBanners from "@/components/Home/SmallerBanners";
import Categories from "@/components/Home/Categories";
import ProductsTab from "@/components/Home/ProductsTab";
import HotProductsCarousel from "@/components/Home/HotProductsCarousel";
import DiscountProducts from "@/components/Home/DiscountProducts";
import SummerSale from "@/components/Home/SummerSale";

const Homepage = () => {
  return (
    <>
      <HTMLComment text=" Main Banner " />
      <Banner />
      <HTMLComment text=" Smaller Banners " />
      <SmallerBanners />
      <HTMLComment text=" Browse By Category " />
      <Categories />
      <HTMLComment text=" Products Tab Section " />
      <ProductsTab />
      <HTMLComment text=" Hot Products "/>
      <HotProductsCarousel />
      <HTMLComment text=" Discount Products "/>
      <DiscountProducts />
      <HTMLComment text=" Summer Saler Banner " />
      <SummerSale />
    </>
  );
};

export default Homepage;
