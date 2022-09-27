import { doctolib } from '../assets'
import Image from 'next/image'
import { Button, ButtonGroup } from '@chakra-ui/react'

function Bouton() {
  return (
    <div>
      <a href="https://doctolib.com/" target="_blank" rel="noopener noreferrer">
        <Button 
          colorScheme='#1C3879'
          variant='outline'
          rightIcon={<Image src={doctolib} alt='' layout='fill' />}
        >
          Prendre rendez-vous
        </Button>
      </a>
    </div>
  )
}

export default Bouton
