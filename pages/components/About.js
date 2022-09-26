import React from 'react'
import Layout from '../layout/Layout'

const About = () => {
  return (
    <Layout>
      <section className='container mx-auto px-20 md:px-36 lg:px-60 md:my-10 my-24'>
        <article className='my-32'>
          <h1 className='text-5xl font-bold text-black/80 my-3'>Who am i ?</h1>
          <p className='text-xl leading-relaxed font-mono'>Hello, my name is Syafiq Rizky Fauzi. Long story short I am a software engineer who have no boss like a ronin. <br /> I am working for myself.</p>
          <hr className='mt-3' />
        </article>
      </section>
    </Layout>
  )
}

export default About