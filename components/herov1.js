import { motion } from "framer-motion"
import Navbar from '../components/Navbar'
import Bouton from './Bouton'
import AnimatedTitle from './AnimatedTitle'


function Hero() {

  const placeholderText = [
    { 
      type: "heading1", 
      text: "Anaïs Haudiquer",
    },
    {
      type: "heading2",
      text: "Ostéopathe basée à Roanne"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025  
      }
    }
  };


  return (
    <section className="p-[3rem]">
      <Navbar />
      <div className="md:pt-[300px] pt-[200px] h-screen">
        <motion.div
          className="pb-[50px]"
          initial="hidden"
          animate={'visible'}
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedTitle {...item} key={index} />;
            })}
          </div>
         </motion.div>
         <div>
          <Bouton className="" />
         </div>
      </div>
    </section>
  )
}

export default Hero