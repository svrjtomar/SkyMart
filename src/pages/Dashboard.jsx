import React from 'react'
import BrandLogo from '../components/common/BrandLogo'
import Navbar from '../components/layout/Navbar'

const Dashboard = () => {
  return (
    <div className="bg-sky-dark min-h-screen text-white">
      <Navbar />
      <main className="p-8">
        <HeroSection />
      </main>

    </div>

  )
}

export default Dashboard