import { Carousel } from "./components/Carousel";
import Products from "./components/Products";
import Scroller from "./components/Scroller";
import Ads from "./components/ads";

export default function MainPage() {
  return (
    <div className=" pt-8">
      <div className="ads-container flex flex-col lg:flex-row lg:mx-[160px] shrink-0 justify-center gap-2">
        <div className="right-ads flex md:justify-center">
          <Carousel />
        </div>
        <div className="left-ads hidden lg:flex flex-col justify-between md">
          <Ads />
          <Ads />
        </div>
      </div>
      <Scroller />
      <Products />
    </div>
  );
}
