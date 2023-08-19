/* eslint-disable react/no-unescaped-entities */
import heroImage from '../assets/heroImage.svg'
import { data } from "../data/socialLinks";

import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-background py-10 lg:py-5">
      {/* Hero content */}
      <div className="px-10 space-y-5 lg:py-6">
        <h2 className="text-2xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">Hey 👋 I am
          <br className="block sm:hidden" /> Michael Momo
        </h2>
        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
          I am a Fullstack Developer passionate about crafting seamless digital experiences.
          From frontend magic to backend logic, I create web solutions that blend innovation and functionality. Let's build something amazing together!
        </p>

        <div className="flex gap-x-4 mt-4">
          {data.map((item) => (
            <a
              key={item.id}
              className=" text-primary hover:text-text duration-300"
              aria-label={`Visit ${item.url}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-4 text-xl text-gray-600 md:mt-8">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-primary"></span>
            <span className="relative"> Have a question? </span>
          </span>
          <br className="block sm:hidden" /><Link to="/contact"
            className="transition-all duration-200 text-text hover:text-sky-600 hover:underline ml-2">  Contact Me</Link>
        </p>
      </div>
      {/* Hero image */}
      <img
        className="hero hidden sm:inline-flex w-250 h-auto lg:h-80 xl:h-full max-h-[80vh]  object-cover"
        src={heroImage}
        alt="hero Image, develop svg"
      />

    </div>
  )
}

export default Hero
