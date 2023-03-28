import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackGroundCircles from './BackGroundCircles'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hey, the names Kasper and i have experience in', 
    'Blazor', 
    'React.js', 
    'Next.js', ],
    loop: true,
    delaySpeed: 2000,

  })
  
  
    return <div>
        <BackGroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='Blue'/>
        </h1>
    </div>
}