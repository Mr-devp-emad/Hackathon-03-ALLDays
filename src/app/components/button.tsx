
import React from 'react'

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

type buttonType = {
    title:string
    style?:string
}
const Button = (prop:buttonType) => {
    const {title,style} = prop
  return (
    <div>
        <button className={`${style} ${montserrat.className} px-10 py-[15px] rounded-[5px]`}>{title}</button>
    </div>
  )
}

export default Button