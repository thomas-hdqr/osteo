import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Hero from '../components/Hero'
import Me from '../components/Me'
import Why from '../components/Why'
import Who from '../components/Who'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

 


export default function Home() {


  return (
    <div className={styles.container}>
        <Head>
          <title>Anaïs Haudiquer - Ostéopathe à Roanne</title>
          <meta name="description" content="Anaïs Haudiquer, Ostéopathe D.O basée à Roanne. Je vous accueille dans mon cabinet du Lundi au Samedi sur rendez-vous au 07 88 61 04 51 ou Doctolib." />
          <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HealthAndBeautyBusiness",
                "name": "Anaïs Haudiquer - Ostéopathe",
                "image": "https://www.anaishaudiquer-osteopathe.fr/anais.webp",
                "url": "https://www.anaishaudiquer-osteopathe.fr",
                "telephone": "+33788610451",
                "email": "anaishaudiquer.osteo@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "32 boulevard de Belgique",
                  "addressLocality": "Roanne",
                  "postalCode": "42300",
                  "addressCountry": "FR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 46.0373,
                  "longitude": 4.0687
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "21:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "14:00"
                  }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Services d'ostéopathie",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Consultation d'ostéopathie",
                        "description": "Séance d'ostéopathie complète"
                      },
                      "price": "55",
                      "priceCurrency": "EUR"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Drainage Lymphatique Corps complet",
                        "description": "Drainage lymphatique manuel du corps entier"
                      },
                      "price": "120",
                      "priceCurrency": "EUR"
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1",
                  "ratingCount": "36"
                },
                "priceRange": "55€ - 120€"
              })
            }}
          />
        </Head>
        <main className="">
          <Hero />
          <Me />
          <Why />
          <Who />
          <Contact />
          <Footer />
        </main>

    </div>
  )
}
