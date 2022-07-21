import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Features from '../components/Featured';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Codeinlect - Commited to Innovition</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Topbar */}

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Featured */}
      <Features />
      {/* About */}

      {/* Counts */}

      {/* Clients */}

      {/* Services */}
      <Services />

      {/* Team */}
   

      {/* Contact */}


      {/* Footer */}
      <Footer />

      {/* Copyright */}
      <Copyright />
   
    </div>
  )
}

export default Home
