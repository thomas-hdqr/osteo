import doctolib from '../public/doctolib.svg'
import Image from 'next/image'

function Bouton() {
  return (
    <div className="">
      <div className="bouton-doctolib">
        <a href="https://www.doctolib.fr/osteopathe/roanne/anais-haudiquer-roanne" className="flex flex-row place-items-center justify-center" target="_blank" rel="noopener noreferrer">
          <p className="pr-4 text-sm sm:text-xl font-medium">Prendre un rendez-vous</p>
          <Image src={doctolib} alt='' width='80' height='80' />
        </a>
      </div>
    </div>
  )
}

export default Bouton
