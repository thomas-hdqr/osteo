import React from 'react'

function Footer() {
  return (
    <div className="bg-[#1C3879] w-full sm:px-20 pt-20">
      <div className="sm:grid grid-cols-3">
        <div className="pb-8">
          <p className="footer-title">Horaires</p>
          <p className="footer-items">Lundi: 9h-21h</p>
          <p className="footer-items">Mardi: Fermé</p>
          <p className="footer-items">Mercredi: 8h-13h</p>
          <p className="footer-items">Jeudi: 9h-21h</p>
          <p className="footer-items">Vendredi: 9h-21h</p>
          <p className="footer-items">Samedi: 8h-13h</p>
          <p className="footer-items">Dimanche: Fermé</p>
        </div>
        <div className="pb-8">
          <p className="footer-title">Adresse</p>
          <a href="https://www.google.fr/maps/place/Ana%C3%AFs+Haudiquer/@46.0456614,4.0766119,15z/data=!4m2!3m1!1s0x0:0x2ef6bb513b0c1366?sa=X&ved=2ahUKEwjhj8P9rdj6AhVCxQIHHQF8DOYQ_BJ6BAhAEAU" target="_blank" rel="noopener noreferrer">
            <p className="footer-items">32 Bd de Belgique</p>
            <p className="footer-items">42300 - Roanne</p>
          </a>
        </div>
        <div className="pb-8">
          <p className="footer-title">Contact</p>
          <p className="footer-items">Tél: 07.88.61.04.51</p>
          <p className="footer-items"><a href="mailto:anaishaudiquer.osteo@gmail.com">Email: anaishaudiquer.osteo@gmail.com</a></p>
        </div>
      </div>
      <p className="text-[#F9F5EB] text-sm text-center font-thin  pt-4 pb-3">Fait avec ❤️ par Thomas</p>
    </div>
  )
}

export default Footer