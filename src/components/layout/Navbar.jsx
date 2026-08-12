import React from 'react'
import BrandLogo from '../common/BrandLogo'
import { IconButton } from '../common/IconButton'

const Navbar = () => {
  return (
    <div className='nav  w-screen h-auto flex justify-between items-center'>
       <div>
        <div className="pl-4">
        <BrandLogo />
        </div>
        
        </div>
        
        <div className='flex justify-between gap-4 p-4'>
            <div className="profile-badge">
            <IconButton className='flex gap-2'>
              <div className="profile-pic size-7 bg-sky-600 text-white font-bold rounded-lg ">
                S
              </div>
              Shiv
            </IconButton>
            </div>
            <IconButton ><i className="fa-solid fa-cart-shopping"></i></IconButton>
            <IconButton className='hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-all text-white/40'><i className="fa fa-sign-out" aria-hidden="true"></i>
</IconButton>
            <IconButton className='lg:hidden'><i className="fa-solid fa-bars"></i></IconButton>
            
        </div>
        

    </div>
  )
}

export default Navbar