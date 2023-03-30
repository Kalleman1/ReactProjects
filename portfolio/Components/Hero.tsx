import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackGroundCircles from './BackGroundCircles'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hey, my name is Kasper and i have experience in:', 
    'Blazor', 
    '.NET maui',
    'MVC',
    'React.js', 
    'Next.js', ],
    loop: true,
    delaySpeed: 2000,

  })
  
  
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackGroundCircles />
        <img className='relative rounded-fill h-32 w-32 mx-auto rounded-full'
        src='https://avatars.githubusercontent.com/u/93120184?v=4'
        alt=''
        />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-blue-500 pb-2 tracking-[10px]'>
            Studying Software development
          </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='Blue'/>
        </h1>

        <div className='pt-5'>
          <Link href="#about">
          <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
          <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
          <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
    )
}