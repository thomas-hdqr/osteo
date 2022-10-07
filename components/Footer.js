import React from 'react'

function Footer() {
  return (
    <section className="bg-[#1C3879] w-full p-20">
      <div className="md:grid grid-cols-3">
        <div className="">
          <p className="footer-title">Horaires</p>
          <p className="footer-items">Lundi: 9h-18h</p>
          <p className="footer-items">Mardi: 9h-18h</p>
          <p className="footer-items">Mercredi: 9h-18h</p>
          <p className="footer-items">Jeudi: 9h-18h</p>
          <p className="footer-items">Vendredi: 9h-18h</p>
          <p className="footer-items">Samedi: 9h-12h</p>
        </div>
        <div className="">
          <p className="footer-title">Adresse</p>
          <p className="footer-items">93 Bd de Belgique</p>
          <p className="footer-items">42300 - Roanne</p>
        </div>
        <div className="">
          <p className="footer-title">Contact</p>
          <p className="footer-items">Tél: 07.88.61.04.51</p>
          <p className="footer-items">Email: anais@osteo-roanne.com</p>
        </div>
      </div>
      <p className="footer-items pt-4">Tout droit réservé</p>
    </section>
  )
}

export default Footer