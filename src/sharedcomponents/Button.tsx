import React from 'react'

const Button = ({ text} : {
  text: string
}) => {
  return (
    <button className='whitespace-nowrap text-sm font-semibold rounded bg-sky-500 px-6 py-2 text-white'>{text}</button>
  )
}

export default Button