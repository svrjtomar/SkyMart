import React from "react";
import BrandLogo from "../components/common/BrandLogo";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/layout/HeroSection";
import MetricCard from "../components/layout/MetricCard";
import CategoryCard from "../components/layout/CategoryCard";
import ProductCard from "../components/layout/ProductCard";
import {
  FaBox,
  FaChartLine,
  FaStar,
  FaTags,
  FaArrowRight,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="bg-sky-dark min-h-screen text-white relative">
      <div className="sticky top-0 z-50 bg-[var(--color-bg-main)]">
        <Navbar />
      </div>

      <main className="px-32 py-8">
        <HeroSection />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <MetricCard
            className="text-lime-600 bg-lime-400/10"
            icon={<FaBox />}
            value="0"
            title="Cart Items"
            subtitle="In your bag"
          />
          <MetricCard
            className="text-blue-600 bg-blue-600/10"
            icon={<FaChartLine />}
            value="$0.00"
            title="Cart Value"
            subtitle="Ready to checkout"
          />
          <MetricCard
            className="text-yellow-600 bg-yellow-600/10"
            icon={<FaStar />}
            value="5"
            title="Top Products"
            subtitle="Highly rated"
          />
          <MetricCard
            className="text-violet-600 bg-violet-600/10"
            icon={<FaTags />}
            value="6"
            title="Categories"
            subtitle="To explore"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <h3 className="text-2xl font-bold">Shop By Category</h3>
          <a href="" className="text-lime-300 flex items-center text-sm gap-2">
            View All <FaArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-6 gap-2">
          <CategoryCard
            imageUrl="https://www.pikpng.com/pngl/b/303-3032098_home-appliance-png-transparent-picture-transparent-home-appliances.png"
            title="Electronics"
            count="10"
          />
          <CategoryCard
            imageUrl="https://static.vecteezy.com/system/resources/previews/046/430/701/non_2x/wardrobe-stand-with-clothes-on-it-on-transparent-background-png.png"
            title="Clothing"
            count="10"
          />
          <CategoryCard
            imageUrl="https://static.vecteezy.com/system/resources/thumbnails/034/630/930/small_2x/elegant-decorative-vases-and-planters-with-succulents-and-other-plants-on-transparent-background-interior-accessories-cut-out-home-decor-front-view-ai-generated-png.png"
            title="Home Decor"
            count="10"
          />
          <CategoryCard
            imageUrl="https://static.vecteezy.com/system/resources/previews/051/959/484/non_2x/modern-living-room-with-stylish-red-furniture-cozy-cushions-coffee-table-greenery-pendant-light-and-a-contemporary-carpet-on-the-floor-png.png"
            title="Furniture"
            count="10"
          />
          <CategoryCard
            imageUrl="https://www.pngplay.com/wp-content/uploads/8/Sports-PNG-Images-HD.png"
            title="Sports"
            count="10"
          />
          <CategoryCard
            imageUrl="https://www.pngkey.com/png/full/425-4252312_accessories-school-supplies.png"
            title="Furniture"
            count="10"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <h3 className="text-2xl font-bold"> Top Rated Items</h3>
          <a href="" className="text-lime-300 flex items-center text-sm gap-2">
            View All <FaArrowRight />
          </a>
        </div>
        <div className="flex gap-10">
          <ProductCard
            imageUrl={
              "https://www.pngkey.com/png/full/425-4252312_accessories-school-supplies.png"
            }
            title={"Pencile box with 3 boxes"}
            price="Rs. 258"
            rating={"4.5"}
          />
        </div>
        <div className="mt-4 flex justify-between">
          <h3 className="text-2xl font-bold">New Arrivals</h3>
          <a href="" className="text-lime-300 flex items-center text-sm gap-2">
            View All <FaArrowRight />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
