import React from 'react'
import Bouton from './Bouton'


function Contact() {
  return (
    <section id="contact" className="p-20">

      <div className="font-semibold pb-8">
        <h3>Contact</h3>
      </div>


      {/* Contact details and map integration */}
      <div className="grid grid-cols-2">

        <div className="border-8">
          <div>
            <p>32 boulevard de Belgique</p>
            <p className="md:pb-10">Roanne, 42300</p>
            <p>Tél: 07 88 61 04 51</p>
            <p className="md:pb-10">Email: anaishaudiquer@gmail.com</p>
          </div>
          <Bouton />
        </div>
        
        {/* intégration carte Google Maps */}
        <div className="border-8">

        </div>

      </div>


    </section>
  )
}

export default Contact