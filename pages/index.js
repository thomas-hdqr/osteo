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
    <div>
        <Head>
          <title>Anaïs Haudiquer - Ostéopathe à Roanne</title>
          <meta name="description" content="Anaïs Haudiquer, Ostéopathe D.O basée à Roanne. Je vous accueille dans mon cabinet du Lundi au Samedi sur rendez-vous au 07 88 61 04 51 ou Doctolib." />
          <link rel="icon" href="/favicon.ico" />
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
