import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { LuShoppingBag, LuArrowLeft, LuStar, LuMinus, LuPlus } from 'react-icons/lu';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { mockProducts } from '../Products';
import { useCart } from '../context/CartContext';


const ProductView = () => {
    const { id } = useParams();
    const { addToCart, decreaseQuantity, cartItems } = useCart();
    const cartItem = cartItems.find((item) => String(item.id) === String(id));
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAddInitial = (e) => {
        e.preventDefault();
        addToCart({ id, imageUrl, title, price });
    };


    const product = mockProducts.find(p => String(p.id) === String(id));


    if (!product) {
        return (
            <div className="min-h-screen bg-[#111111] text-white flex flex-col">
                <Navbar />
                <main className="grow flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
                    <Link to="/shop" className="text-lime-500 hover:underline">Return to Shop</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#111111] text-white flex flex-col">
            <Navbar />

            <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                {/* Back Button */}
                <Link to="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-500 transition-colors mb-8">
                    <LuArrowLeft size={20} />
                    <span>Back to Shop</span>
                </Link>

                {/* Product Layout: 1 Column Mobile, 2 Columns Desktop */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">

                    {/* Left Column: Image Gallery */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-[#1a1a1a] border border-[#333333] rounded-3xl overflow-hidden aspect-square">
                            <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right Column: Details & Actions */}
                    <div className="w-full md:w-1/2 flex flex-col">

                        {/* Category Tag */}
                        <span className="text-lime-500 text-sm font-bold uppercase tracking-wider mb-2">
                            {product.category}
                        </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{product.title}</h1>

                        {/* Ratings */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex text-yellow-400">
                                <LuStar fill="currentColor" />
                                <LuStar fill="currentColor" />
                                <LuStar fill="currentColor" />
                                <LuStar fill="currentColor" />
                                <LuStar /> {/* Empty Star */}
                            </div>
                            <span className="text-gray-400 text-sm">({product.ratingCount} Reviews)</span>
                        </div>

                        <p className="text-4xl font-bold text-white mb-8">{product.price}</p>

                        {/* Description (Faking it since your mock data might not have descriptions yet) */}
                        <div className="mb-8 border-t border-b border-[#333333] py-6">
                            <h3 className="font-bold mb-2">Description</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Experience premium quality with the {product.title}. Designed for everyday use,
                                this item features top-tier materials and exceptional craftsmanship. Perfect for
                                anyone looking to elevate their {product.category.toLowerCase()} collection.
                            </p>
                        </div>

                        {/* Add to Cart Button */}
                        
                            {quantity === 0 ? (
                                // State A: Not in cart yet
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full md:w-auto px-8 py-4 bg-lime-400 text-black font-bold text-lg rounded-xl hover:bg-lime-500 transition-colors flex items-center justify-center gap-3"
                                >
                                    <LuShoppingBag size={24} />
                                    Add to Cart
                                </button>
                            ) : (
                                // State B: Already in cart -> Show large - / + controller
                                <div className="flex items-center gap-6">

                                    {/* The Controller */}
                                    <div className="h-14 flex items-center bg-[#2A2A2A] rounded-xl border border-[#444444] overflow-hidden">
                                        <button
                                            onClick={() => decreaseQuantity(product.id)}
                                            className="w-14 h-full flex items-center justify-center text-white hover:bg-[#333333] hover:text-lime-400 transition-colors"
                                        >
                                            <LuMinus size={20} />
                                        </button>

                                        <span className="w-16 text-center text-lg font-bold text-white">
                                            {quantity}
                                        </span>

                                        <button
                                            onClick={() => addToCart(product)}
                                            className="w-14 h-full flex items-center justify-center text-white hover:bg-[#333333] hover:text-lime-400 transition-colors"
                                        >
                                            <LuPlus size={20} />
                                        </button>
                                    </div>

                                    {/* Optional: Helpful feedback text */}
                                    <span className="text-lime-500 font-semibold text-sm">
                                        In your cart
                                    </span>

                                </div>
                            )}
                       

                    </div>

                </div>
            </main>

            <Footer />
        </div>

    )
}

export default ProductView