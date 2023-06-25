import Head from 'next/head'
import {
  Header,
  Logo,
  Branding,
  H1,
  H2,
  ButtonHeader,
  BorderBranding,
  TextPromise,
  StyleH1
} from '../components/home'

import Cards from '../components/cards'

import Image from 'next/image'
import LogoImage from '../assets/logo.png'
import IconHeader from '../assets/asset-header.png'

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
            <ButtonHeader>WEBINARS EXCLUSIVOS</ButtonHeader>
            <H2>Menos Conversinha,</H2>
            <StyleH1>
              <H1>Mais Conversão</H1> <Image src={IconHeader} 
              width='40px'
              height='25px'
              alt='icon header' />
            </StyleH1>
            <BorderBranding></BorderBranding>
            <TextPromise>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</TextPromise>
          </Branding>
          
          
        </Header>
    </>
  )
}
