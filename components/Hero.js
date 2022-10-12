import Image from 'next/image'
import Navbar from '../components/Navbar'
import Bouton from './Bouton'
import herocover from '../public/herocover.png'


function Hero() {

  return (
    <div className="">
      <div className="sm:grid grid-cols-2 ">
          <div className="sm:px-20 px-10 pb-20">
            <div className='py-12' >
              <Navbar />
            </div>
            <div className="sm:pt-[6rem]">
              <h1 className="font-semibold md:leading-[4rem]">Anaïs <br/>Haudiquer</h1>
              <h1 className="sm:text-[2rem] text-2xl font-normal pt-4 pb-10">Ostéopathe basée à Roanne</h1>
            </div>
            <div className="">
              <Bouton />
            </div>
          </div>
          <div className="hidden sm:grid">
            <Image src={herocover} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Hero