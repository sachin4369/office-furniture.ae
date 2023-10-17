import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <>
<section className="bg-gradient-to-r from-sky-900 to-indigo-900 mb-12 py-12 relative">
    <div className="px-6 py-12 text-center md:px-12 lg:text-left max-w-screen-xl mx-auto px-4 py-2 ">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">Your Comfort <span className="text-[hsl(218,81%,75%)]">Our Business</span></h1>
            <p className="text-lg text-[hsl(218,81%,95%)]">
            Office chairs from the <strong>Regent Seating Collection</strong> combine elegance and ergonomics. Crafted for executive comfort, they offer style and support, enhancing productivity and sophistication in the workplace.
            </p>
          </div>
          <div className="mb-12 lg:mb-0">
            <Image src="/images/hero-pic.jpg"
            className="w-full rounded-lg shadow-lg" alt="Regent Seating Collection"
            width={600}
            height={400}
             />
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default HeroSection