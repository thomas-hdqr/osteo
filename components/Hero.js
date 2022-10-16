import Image from 'next/image'
import Navbar from '../components/Navbar'
import Bouton from './Bouton'
import herocover from '../public/herocover.png'
import { motion } from 'framer-motion'


function Hero() {

  // Animation
  const container = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        type: "spring",
        duration: 1
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  

  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"
    className=""
    >
      <div className="sm:grid grid-cols-2 ">
          <div className="sm:px-20 px-10 pb-20">
            <motion.div
            variants={item}   
            className='py-12' 
            >
              <Navbar />
            </motion.div>
            <motion.div
            variants={item}
            initial="hidden"
            animate="show"   
            className="sm:pt-[6rem]"
            >
              <h1 className="font-semibold md:leading-[4rem]">Anaïs <br/>Haudiquer</h1>
              <h1 className="sm:text-[2rem] text-2xl font-normal pt-4 pb-10">Ostéopathe basée à Roanne</h1>
            </motion.div>
            <motion.div
            variants={item}   
            className="rounded-2xl"
            >
              <Bouton />
            </motion.div>
          </div>
          <motion.div
          variants={item} 
          className="hidden sm:grid"
          >
            <Image className="rounded-bl-2xl" src={herocover} alt="" height="800" width="700" />
          </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero