import Head from 'next/head'
import Image from 'next/image'

import {
  Header,
  Branding,
  H1,
  H2,
  ButtonHeader,
  BorderBranding,
  TextPromise,
  StyleH1,
  Div
} from '../components/home'


/*Images*/
import LogoImage from '../assets/logo.png'
import IconHeader from '../assets/asset-header.png'

/* Components*/
import NavBar from '../components/nav-bar'
import ActionAreaCard from '../components/card-video'
import Proposal from '../components/proposal'
import Footer from '../components/footer'
/*import Cards from '../components/card-video'*/




export default function Home() {
  return (
      <>
        <Header>
          <Image 
              src={LogoImage} 
              width={194}
              height={42}
              alt='logo leadster'
              style={{marginTop: 5}}
          />
          <Branding>
            <ButtonHeader>WEBINARS EXCLUSIVOS</ButtonHeader>
            <H2>Menos Conversinha,</H2>
            <StyleH1>
              <H1>Mais Conversão</H1> <Image src={IconHeader} 
              width={40}
              height={25}
              alt='icon header' />
            </StyleH1>
            <BorderBranding></BorderBranding>
            <TextPromise>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</TextPromise>
          </Branding>
        </Header>

        <NavBar/>

        <ActionAreaCard/>

        <Proposal/>

        <Footer/>

      </>
  )
}
