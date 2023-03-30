import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h2 className='absolute top-24 text-gray-500 tracking-[20px] uppercase text-2xl'>
            Skills
        </h2>
        <h2 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill to see
        </h2>
        <div className='grid grid-cols-4 gap-5'>
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
        </div>
    </motion.div>
  )
}