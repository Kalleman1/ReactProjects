import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between nx-auto'>
        <div className='flex flex-row items-center'>
            {/* Social icons */}
            <SocialIcon url="https://github.com/Kalleman1" 
            fgColor='gray' 
            bgColor='transparent'/> 
            <SocialIcon url='https://www.linkedin.com/in/kasper-rahr-clausen-0700b2222/?originalSubdomain=dk'
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url='https://www.facebook.com/kasper.clausen.731/'
            fgColor='gray'
            bgColor='transparent'/>
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon className='cursor-pointer'
          network='email'
          bgColor='transparent'
          fgColor='gray'/>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Kom i kontakt!</p>
        </div>
    </header>
  )
}