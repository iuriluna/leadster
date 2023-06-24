import Head from 'next/head'
import {
  Header,
  Logo,
  Branding,
  H1,
  H2
} from '../components/home'

import Cards from '../components/cards'

import Image from 'next/image'
import LogoImage from '../assets/logo.png'

export default function Home() {
  return (
    <>
        <Header>
          <Image 
              src={LogoImage} 
              width='194px'
              height='42px'
              alt='logo leadster' 
          />
          <Branding>
            <p>WEBINARS EXCLUSIVOS</p>
            <H2>Menos Conversinha,</H2>
            <H1>Mais Conversão</H1>
            <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
          </Branding>
        </Header>
    </>
  )
}
