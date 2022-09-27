import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Me from '../components/Me'
import Why from '../components/Why'
import Who from '../components/Who'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="p-[3rem]">
      <Hero />
      <Me />
      {/* <Why /> */}
      {/* <Who /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}
