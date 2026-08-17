import React from "react";

const HeroSection = () => {
  return (
    <div className=" h-4/7 lg:w-full border border-[var(--color-accent)] rounded-3xl bg-white/5 p-10 px-14 flex items-center gap-5">
      
      
      <div className="flex flex-col gap-6 w-1/2">
        <div className="text-lime-400">GOOD AFTERNOON 👋</div>
        <h2 className="text-white text-5xl font-bold">Welcome back,<br /> <span className="text-[var(--color-accent)]">Home!</span></h2>
        <p className="text-[var(--color-text-muted)]">
          Discover today's picks — hand-curated products across electronics,
          fashion, and more.
        </p>
        <div className="button-contianer flex gap-3">
          <a  href="/shop" className="py-2 px-3 border rounded-2xl cursor-pointer text-black bg-[var(--color-accent)]">Shop Now</a> 
          <a href="/shop" className="py-2 px-3 border border-gray-600 rounded-2xl cursor-pointer">View All Products</a>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-5 items-end">
        <div className="rounded-2xl border p-4 flex flex-col items-center bg-lime-300/15">
            <h3 className="text-3xl font-bold text-[var(--color-accent)]">20+</h3><p className="text-[var(--color-text-muted)] text-xs px-3">Products Available</p>
        </div>
        <div className="rounded-2xl border p-4 flex flex-col items-center">
            <h3 className="text-3xl font-bold">Free</h3><p className="text-[var(--color-text-muted)] text-xs px-3">Delivery on ₹999+</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
