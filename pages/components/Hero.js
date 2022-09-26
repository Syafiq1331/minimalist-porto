import React from 'react'

const Hero = () => {
    return (
        <section className='container mx-auto px-12 md:px-36 lg:px-60'>
            <article className="font-mono mt-5">
                <picture>
                    <img src="/samurai.png" alt="" className='w-20 md:w-32 mx-auto' />
                </picture>
                <div>
                    <h2 className='my-5 text-center font-bold text-lg md:text-2xl lg:text-3xl text-slate-900'>Hello, my name is Syafiq Rizky Fauzi.</h2>
                    <p className='text-center text-sm md:text-xl text-slate-900/80'>I am a Javascript Developer who works within <span className='text-blue-500 font-bold'>React Js</span> & <span className='font-bold text-black'>Next Js</span> Ecosystem.
                        Check out my latest projects at my projects.
                        Feel free to contact me at syafiqbussines@gmail.com.</p>
                </div>
            </article>
        </section>
    )
}

export default Hero