import Head from 'next/head'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import WorkExperience from '@/Components/WorkExperience'
import Skills from '@/Components/Skills'
import { PageInfo } from '@/typings'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '@/utils/fetchPageInfo'


type Props ={
  pageInfo: PageInfo;
}


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
       <Head>
        <title>Kaspers Portfolio</title>
      </Head>

     <Header />

     <section id="hero" className='snap-start'>
      <Hero />
     </section>

     <section id="about" className='snap-center'>
      <About />
     </section>

     <section id="experience" className='snap-center'>
      <WorkExperience />
     </section>

     <section id='skills' className='snap-center'>
      <Skills />
     </section>

     {/* Projects */}

     {/* Contact Me */}
    </div>
     
  )
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();

//   return {props: {
//     pageInfo
//   }}
// }
