// import { useEffect, useState } from "react";
// import useFetch from "../function/useFetch";
import Slider from "../component/Slider";
import Banner from "../component/Banner";
import CarouselVendor from "../component/CarouselVendor";
import CarouselBuyer from "../component/CarouselBuyer";
import TrendingProduct from "../component/TrendingProduct";
import RecommendProduct from "../component/RecommendProduct";
import ListTestimoni from "../component/ListTestimoni";
import Benefit from "../component/Benefit";

const Home = () => {

  return (
    <main className="main">
      <Slider></Slider>
       <div className="mb-4"></div>
       <Banner></Banner>
      <div className="mb-2"></div>
      <CarouselVendor></CarouselVendor>
      <div className="mb-5"></div>
      <CarouselBuyer></CarouselBuyer>
       <div className="mb-2"></div>
       <TrendingProduct></TrendingProduct>
       <RecommendProduct></RecommendProduct>
       <ListTestimoni></ListTestimoni>
       <hr />
       <Benefit></Benefit>
    </main>
  );
}
 
export default Home;
