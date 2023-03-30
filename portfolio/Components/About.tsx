import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    viewport={{
        once: true,
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 text-gray-500 tracking-[20px] uppercase text-2xl'>
            About
        </h3>
        <motion.img
        initial={{
            x: -500,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{
            once:true,
        }}
        transition={{
            duration: 1.5,
        }}
        src='https://avatars.githubusercontent.com/u/93120184?v=4'
        className='-mb-20 md:mb-0 flex-shrink-0 rounded-full h-56 w-56 object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'/>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>A <span className='underline text-xs decoration-blue-500'>little</span> bit of background</h4>
            <p className='text-sm font-semibold text-center '>
                Min navn er Kasper bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
            </p>
        </div>
    </motion.div>
  )
}