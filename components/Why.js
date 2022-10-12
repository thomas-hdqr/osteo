
function Why() {
  return (
    <section id="why" className="sm:p-20 py-20 px-10">
      <div className="pb-10 text-center font-semibold">
        <h2>L&apos;Ostéopathie</h2>
      </div>
      <div className="sm:grid grid-cols-3">
        <div className="sm:grid justify-evenly text-center sm:border-r-2 sm:border-[#1C3879] p-8">
            <p className="font-semibold text-2xl">Soulage</p>
            <p className="pt-5">Une capacité à soulager les douleurs pouvant toucher tout type d’individu.</p>
        </div>
        <div className="sm:grid justify-evenly text-center sm:border-r-2 sm:border-[#1C3879] p-8">
            <p className="font-semibold text-2xl">Préviens</p>
            <p className="pt-5">Idéale pour prévenir de futures douleurs, l’ostéopathie est une médecine manuelle complémentaire et peut être associée à d’autres thérapies / traitements.</p>
        </div>
        <div className="grid justify-evenly text-center p-8">
            <p className="font-semibold text-2xl">Conseil</p>
            <p className="pt-5">L’ostéopathe à également un rôle de conseiller concernant la posture ou le mode de vie par exemple.</p>
        </div>
      </div>
    </section>
  )
}

export default Why