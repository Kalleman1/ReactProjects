import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden'>
        <h2 className='absolute top-24 text-gray-500 tracking-[20px] uppercase text-2xl'>
            Work Experience
        </h2>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
  )
}