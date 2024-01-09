import React from 'react'

const Button = ({ text, style = 'primary' } : {
  text: string;
  style?: 'primary' | 'secondary'
}) => {
  const buttonColor = (style === 'primary')
    ? 'bg-sky-500'
    : (style === 'secondary')
    ? 'bg-emerald-500'
    : 'bg-slate-500'
  return (
    <button className={`whitespace-nowrap text-sm rounded ${buttonColor} px-6 py-2 text-white`}>{text}</button>
  )
}

export default Button