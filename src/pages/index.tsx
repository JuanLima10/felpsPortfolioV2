import Head from 'next/head'
import Footer from '../components/Footer'
import About from './About'
import Header from './Header'
import PetAdd from './PetAdd'
import Role from './Role'
import SolarSystem from './SolarSystem'

export default function Home() {
  return (
    <>
    <Header />
    <PetAdd />
    <Role />
    <SolarSystem />
    <About />
    <Footer />
    </>
  )
}
