import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
       <Head>
        <title>Kaspers Portfolio</title>
      </Head>

     <Header />

     {/* Hero */}
     <section id="hero">
      <Hero />
     </section>

     {/* About */}

     {/* Experience */}

     {/* Skills */}

     {/* Projects */}

     {/* Contact Me */}
    </div>
     
  )
}
