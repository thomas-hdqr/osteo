import Image from 'next/image'
import me from '../public/me.png'

function Me() {
  return (
    <section id="me" className="sm:grid grid-cols-2 p-12 bg-[#1C3879] sm:m-20 m-5 rounded-2xl justify-center items-center drop-shadow-2xl">
      <div className="">
        <Image className="rounded-2xl" src={me} alt="" objectFit='contain' />
      </div>
      <div className="text-[#DCD6D6] sm:text-right">
        <h2 className="font-semibold">Qui suis-je</h2>
        <p className="pt-5">Après un Bac ES, j’ai débuté une formation en 5 ans d’ostéopathie au sein du Ceeso Paris. Mon apprentissage m’a permis d’aborder et de comprendre les principes et la philosophie de l’ostéopathie. Au cours de cette formation j’ai pu acquérir des connaissances dans le domaine médicale en termes d’anatomie et de sémiologie. L’ostéopathie étant une médecine manuelle de première intention, cette formation m’a permis de comprendre comment et quand prendre en charge un patient. </p>
        <p className="pt-5">Diplômée depuis Juin 2022, j’ai commencé une collaboration dans un cabinet à Paris pendant plusieurs mois. Aujourd’hui je vous accueille dans mon propre cabinet d’ostéopathie à Roanne.</p>
      </div>
    </section>
  )
}

export default Me