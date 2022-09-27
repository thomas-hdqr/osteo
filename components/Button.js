import { doctolib } from '../assets'
import Image from 'next/image'

function Button() {
  return (
    <div className="pt-10 cursor-pointer relative flex outline outline-2 px-10">
    <a href="https://doctolib.com" target="_blank" rel="noopener noreferrer">
    <div className="outline outline-2">
      Prendre rendez vous
    </div>
    <div className="outline outline-2">
      <Image
        layout='fill'
        src={doctolib}
        alt="doctolib"
      />
    </div>
    </a>
  </div>
  )
}

export default Button