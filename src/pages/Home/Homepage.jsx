import HTMLComment from "react-html-comment";
import Banner from "@/components/Home/Banner";
import SmallerBanners from "@/components/Home/SmallerBanners";
import Categories from "@/components/Home/Categories";
import ProductsTab from "@/components/Home/ProductsTab";
import CarouselTest from "@/components/Home/CarouselTest";


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
      {/* Test */}
        <CarouselTest />
      
    </>
  );
};

export default Homepage;
