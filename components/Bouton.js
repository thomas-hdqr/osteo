import { doctolib } from '../assets'
import Image from 'next/image'

function Bouton() {
  return (
    <div>
      <a href="https://doctolib.com/" target="_blank" rel="noopener noreferrer">
      <div className="bouton-doctolib">
            <p className="pr-4">Prendre un rendez-vous</p>
            <Image src={doctolib} alt='' width='80' height='80' />
      </div>
      </a>
    </div>
  )
}

export default Bouton
