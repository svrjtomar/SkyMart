import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="divider h-px w-full bg-white mb-8"></div>
<div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 px-5">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-2xl font-bold tracking-wide">
              Sky<span className="text-lime-500">Mart</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for premium products. We offer the best quality items with fast, reliable shipping worldwide.
            </p>
          </div>

        
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Shop</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-lime-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Top Rated</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Clothing</a></li>
            </ul>
          </div>

         
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Support</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Help Center / FAQ</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Stay in the loop</h4>
            <p className="text-gray-400 text-sm">Subscribe to get special offers, free giveaways, and updates.</p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-[#1C1C1C] border border-[#333333] text-white px-4 py-2 rounded-l-xl focus:outline-none focus:border-lime-500 transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-lime-400 text-black font-bold px-4 py-2 rounded-r-xl hover:bg-lime-500 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: */}
        <div className="p-4 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SkyMart. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer