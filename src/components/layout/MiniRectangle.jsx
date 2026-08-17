import React, { Children } from 'react'

const MiniRectangle = ({children, className=""}) => {
  return (
    <div className={`border border-white w-68 h-30 rounded-xl ${className}`}>
      {children}
    </div>
  )
}

export default MiniRectangle