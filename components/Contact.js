import Bouton from './Bouton'


function Contact() {
  return (
    <div id="contact" className="sm:p-20 py-20 px-10">

      <div className="font-semibold pb-8">
        <h3>Contact <span className="ml-2">👋</span></h3>
      </div>


      {/* Contact details and map integration */}
      <div className="sm:grid grid-cols-2">

        <div>
          <div>
            <p>32 boulevard de Belgique</p>
            <p className="pb-10">Roanne, 42300</p>
            <p>Tél: 07 88 61 04 51</p>
            <p className="pb-10">Email: anaishaudiquer@gmail.com</p>
          </div>
          <div className="pb-10">
            <Bouton />
          </div>
        </div>
        
        {/* intégration carte Google Maps */}
        <div>
          <iframe style={{width: "100%", height: "500px",}} src="https://maps.google.com/maps?q=anais%20haudiquer%20roanne&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>

      </div>


    </div>
  )
}

export default Contact
