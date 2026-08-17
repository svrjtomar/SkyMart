import React, { Children } from 'react'

export const IconButton = ({children, className="", onClick}) => {
  return (
    <button onClick={onclick} className={`rounded-xl border border-gray-300/20 p-2 cursor-pointer ${className}`}>{children}</button>
  )
}
