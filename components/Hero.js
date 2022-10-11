import Image from 'next/image'
import Navbar from '../components/Navbar'
import Bouton from './Bouton'
import herocover from '../public/herocover.png'


function Hero() {

  return (
    <section className="">
      <div className="grid grid-cols-2 ">
          <div className="px-20">
            <div className='py-12' >
              <Navbar />
            </div>
            <div className="sm:pt-[6rem]">
              <h1 className="font-semibold md:leading-[4rem]">Anaïs <br/>Haudiquer</h1>
              <h1 className="text-[2rem] font-normal pt-4 pb-10">Ostéopathe basée à Roanne</h1>
            </div>
            <div>
              <Bouton />
            </div>
          </div>
          <div className="">
            <Image src={herocover} alt="" />
          </div>
      </div>
    </section>
  )
}

export default Hero