import { useState } from 'react'
import { navLinks } from '../constants'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'


function Navbar() {

  const [toggle, setToggle] = useState(false);


  return (
    <nav className="w-full flex p-10 justify-between">
        <div className="flex flex-col justify-start">
          <p className="text-2xl font-semibold">Anaïs Haudiquer</p>
          <p>Ostéopathe</p>
        </div>


        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              className={`hover:font-medium cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} 
              key={nav.id}
            >
              <a href={nav.url}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>


        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? XMarkIcon : Bars3Icon }
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}></img>

          <div className=
          {`${toggle ? 'flex' : 'hidden' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] 
              ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
              text-white`}
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