import React, { ReactNode } from 'react'

const Box = ({ children } : {
  children: ReactNode
}) => {
  return (
    <div className='container mx-auto'>{children}</div>
  )
}

export default Box