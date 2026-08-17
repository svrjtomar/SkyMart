import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MiniRectangle from '../components/layout/MiniRectangle'
import { FaArrowRight, FaBoxOpen, FaHandHolding, FaPeopleArrows, FaShieldAlt, FaShieldVirus, FaShip, FaShippingFast, FaStar } from 'react-icons/fa'
import { FaBuildingShield, FaHandHoldingHand, FaHandHoldingHeart, FaHandsHoldingChild, FaShield } from 'react-icons/fa6'
import { href } from 'react-router-dom'


const About = () => {
  return (
    <div className="bg-sky-dark min-h-screen text-white relative">
      <div className="sticky top-0 z-50 bg-[var(--color-bg-main)]">
        <Navbar />
      </div>


      <div className="px-30 py-8">
        <p className='text-center font-bold text-3xl'><span >About</span> <span className='text-lime-600'>SkyMart</span></p>
        <p className='text-center text-gray-500 w-1/2 m-auto mt-3 text-lg '>SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.</p>

        <section className="mt-15 mb-15 flex gap-10 m-auto">
          <MiniRectangle className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <FaBoxOpen className='text-lime-500 text-2xl'></FaBoxOpen>
              <p className='text-2xl font-bold'>20K+</p>
              <p className='text-gray-700'>Products</p>
            </div>
          </MiniRectangle>
          <MiniRectangle className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <FaPeopleArrows className='text-lime-500 text-2xl'></FaPeopleArrows>
              <p className='text-2xl font-bold'>50K+</p>
              <p className='text-gray-700'>Happy Customer</p>
            </div>
          </MiniRectangle>
          <MiniRectangle className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <FaStar className='text-lime-500 text-2xl'></FaStar>
              <p className='text-2xl font-bold'>4.9</p>
              <p className='text-gray-700'>Avg Rating</p>
            </div>
          </MiniRectangle>
          <MiniRectangle className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <FaShippingFast className='text-lime-500 text-2xl'></FaShippingFast>
              <p className='text-2xl font-bold'>99%</p>
              <p className='text-gray-700'>On-Time Delivery</p>
            </div>
          </MiniRectangle>
        </section>

        <section className='border border-white rounded-lg px-15 py-10'>
          <h3 className='text-2xl font-bold mb-3'>Our Story</h3>
          <p className='text-gray-600 text-sm font-bold'>SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences.<br />
            We asked ourselves: what if shopping online was actually enjoyable?<br /><br />

            Three years later, SkyMart serves over 50,000 customers across the country.<br />
            We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.<br /><br />

            We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.</p>
        </section>

        <section>
          <h3 className='text-2xl text-center font-bold mt-5'>What We Stand For</h3>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className='border border-white w-full rounded-2xl h-38 flex p-8' >
              <div className='p-2'>
                <div className="w-12 h-12 text-2xl bg-lime-600/20 text-lime-600 rounded-lg flex justify-center items-center">
                  <FaShieldVirus />
                </div></div>
              <div className="p-2">
                <h3 className='text-xl font-bold'>Trust</h3>
                <p className='text-sm text-gray-600'>Every product is verified for quality and authenticity before listing.</p>

              </div>
            </div>
            <div className='border border-white w-full rounded-2xl h-38 flex p-8'>
              <div className='p-2'>
                <div className="w-12 h-12 text-2xl bg-lime-600/20 text-lime-600  rounded-lg flex justify-center items-center">
                  <FaShippingFast />

                </div>                    </div>
              <div className=" p-2">
                <h3 className='text-xl font-bold'>Trust</h3>
                <p className='text-sm text-gray-600'>Every product is verified for quality and authenticity before listing.</p>

              </div>
            </div>
            <div className='border border-white w-full rounded-2xl h-38 flex p-8'>
              <div className='p-2'>
                <div className="w-12 h-12 text-2xl bg-lime-600/20 text-lime-600 rounded-lg flex justify-center items-center">
                  <FaHandsHoldingChild />

                </div>                    </div>
              <div className=" p-2">
                <h3 className='text-xl font-bold'>Trust</h3>
                <p className='text-sm text-gray-600'>Every product is verified for quality and authenticity before listing.</p>

              </div>
            </div>
            <div className='border border-white w-full rounded-2xl h-38 flex p-8'>
              <div className='p-2'>
                <div className="w-12 h-12 text-2xl bg-lime-600/20 text-lime-600 rounded-lg flex justify-center items-center">
                  <FaStar />

                </div>                    </div>
              <div className=" p-2">
                <h3 className='text-xl font-bold'>Trust</h3>
                <p className='text-sm text-gray-600'>Every product is verified for quality and authenticity before listing.</p>

              </div>
            </div>
          </div>
        </section>

        <section className='w-full h-50 mt-10 border border-lime-300/30 rounded-2xl flex flex-col justify-center items-center gap-3'>
          <h3 className='text-2xl text-center font-bold mt-5'>Ready to shop?
</h3>
          <p className='text-gray-600'>Explore thousands of products at unbeatable prices.</p>
          <a href='/shop' className='active:scale-90 px-10 py-4 rounded-3xl bg-lime-400 hover:bg-lime-300 flex items-center text-black font-bold gap-2 cursor-pointer'>
            Browse Products <FaArrowRight/>
            </a>

        </section>

      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>

  )
}

export default About