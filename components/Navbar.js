import { useState } from 'react'
import { navLinks } from '../constants'
import menu  from '../public/menu.svg'
import close from '../public/close.svg'
import Image from 'next/image';


function Navbar() {

  const [toggle, setToggle] = useState(false);


  return (
    <nav className="w-full flex justify-between relative">


        {/* Desktop navbar */}
        <ul className="list-none sm:flex hidden justify-center items-center flex-1 bg-white shadow-lg bg-opacity-10 bg-clip-padding backdrop-blur p-3 rounded-3xl">
          {navLinks.map((nav, index) => (
            <li
              className={`hover:font-semibold cursor-pointer hover:shadow-lg hover:bg-opacity-90 rounded-2xl p-2 hover:backdrop-blur hover:bg-[#1C3879] hover:text-[#F9F5EB] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} 
              key={nav.id}
            >
              <a href={nav.url}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Responsive navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image 
          src={toggle ? close : menu }
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)} 
          />
          <div className=
          {`${toggle ? 'flex' : 'hidden' } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-2xl bg-white shadow-lg bg-opacity-30 bg-clip-padding backdrop-blur-sm`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] 
                ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            </ul>
          </div>

        </div>
    </nav>
  )
}

export default Navbar