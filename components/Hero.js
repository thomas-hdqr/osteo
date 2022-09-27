import { useState } from 'react'
import { motion } from "framer-motion"
import Navbar from '../components/Navbar'
import Bouton from './Bouton'


function Hero() {
  return (
    <section>
      <Navbar />
      <div className="">
        <h1 className="text-[5rem] font-semibold">Anaïs Haudiquer</h1>
        <h1 className="text-[3rem]">Ostéopathe à Roanne</h1>
      </div>
      <Bouton />
    </section>
  )
}

export default Hero