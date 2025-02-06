import doctolib from '../public/doctolib.svg'
import Image from 'next/image'

function Bouton() {
  const handleClick = () => {
    // Send GA4 event
    window.gtag('event', 'doctolib_click', {
      'event_category': 'engagement',
      'event_label': 'Doctolib Appointment Button'
    });
  };

  return (
    <div className="">
      <div className="bouton-doctolib">
        <a 
          href="https://www.doctolib.fr/osteopathe/roanne/anais-haudiquer-roanne" 
          className="flex flex-row place-items-center justify-center" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          <p className="pr-4 text-sm sm:text-xl font-medium">Prendre un rendez-vous</p>
          <Image src={doctolib} alt='' width='80' height='80' className='w-10 h-10 sm:w-16 sm:h-16' />
        </a>
      </div>
    </div>
  )
}

export default Bouton
