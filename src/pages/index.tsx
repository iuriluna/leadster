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
  StyleH1,
  Proposal,
  CTA_Proposal,
  Question_CTA_Proposal,
  Text_Proposal,
  Border_Proposal,
  ButtonSet_Proposal,
  ObjectionBreak,
  Button_Proposal,
  NoCardText_Proposal,
  Bar_Proposal,
  RatingText_Proposal,
  Footer,
  Slogan_Footer,
  Links_Footer,
  PrincipalsLinks_Footer,
  Link_Footer,
  Cases_Footer,
  TitleCase_Footer,
  Materials_Footer,
  TitleMaterials_Footer,
  Div
} from '../components/home'

import Cards from '../components/cards'

import Image from 'next/image'
import LogoImage from '../assets/logo.png'
import IconHeader from '../assets/asset-header.png'
import Comparative from '../assets/comparativo_img_CTA.png'
import RdStation from '../assets/selo_RD.png'
import NoCard from '../assets/no-card-dark.webp'
import RatingImage from '../assets/rating.webp'
import LogoGif from '../assets/leadster_270.gif'



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
              width='49px'
              height='32px'
              alt='icon header' />
            </StyleH1>
            <BorderBranding></BorderBranding>
            <TextPromise>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</TextPromise>
          </Branding>
        </Header>

        <Div></Div>

        <Proposal>
          <Image src={Comparative} 
              width='400px !important'
              height='400px !important'
              alt='Comparative Leadster' />

            <CTA_Proposal>
                <Question_CTA_Proposal>
                  Pronto para triplificar sua <br></br>
                  <strong>Geração de Leads?</strong>
                </Question_CTA_Proposal>

                <Text_Proposal>
                    Criação e ativação em <strong>4 minutos.</strong>
                </Text_Proposal>
                <Border_Proposal></Border_Proposal>
              

              <ButtonSet_Proposal>
                <Button_Proposal>VER DEMONSTRAÇÃO</Button_Proposal>
                <Image src={RdStation} 
                width='180px'
                height='64px'
                alt='RD Station' />
              </ButtonSet_Proposal>

              <ObjectionBreak>
                <Image src={NoCard} 
                width='16px'
                height='16px'
                alt='No-card' />
                <NoCardText_Proposal><strong>Não</strong> é necessário Cartão de Crédito</NoCardText_Proposal>
                <Bar_Proposal></Bar_Proposal>
                <Image src={RatingImage} 
                width='92px'
                height='16px'
                alt='Rating' />
                <RatingText_Proposal>
                  4.9/5 média de satisfação
                </RatingText_Proposal>
              </ObjectionBreak>
            </CTA_Proposal>
        </Proposal>


        <Footer>
        <Image 
              src={LogoGif} 
              width='194px'
              height='42px'
              alt='logo leadster gif'
          />
          <Slogan_Footer>Transformando visitantes em clientes.</Slogan_Footer>

          <Links_Footer>
            <PrincipalsLinks_Footer>
              Links Principais
            </PrincipalsLinks_Footer>

            <Link_Footer>
              Home
            </Link_Footer>

            <Link_Footer>
              Ferramenta
            </Link_Footer>

            <Link_Footer>
              Preços
            </Link_Footer>

            <Link_Footer>
              Contato
            </Link_Footer>

          </Links_Footer>


          <Cases_Footer>

          <TitleCase_Footer>
            Cases
          </TitleCase_Footer>

          <Link_Footer>
              Geração de Leads B2B
            </Link_Footer>

            <Link_Footer>
              Geração de Leads em Software
            </Link_Footer>

            <Link_Footer>
              Geração de Leads em Imobiliária
            </Link_Footer>

            <Link_Footer>
              Cases de Sucesso
            </Link_Footer>

          </Cases_Footer>

          <Materials_Footer>
            <TitleMaterials_Footer>
              Materiais
            </TitleMaterials_Footer>

            <Link_Footer>
              Blog
            </Link_Footer>

            <Link_Footer>
              Parceria com Agências
            </Link_Footer>

            <Link_Footer>
              Guia Definitivo do Marketing
            </Link_Footer>

            <Link_Footer>
              Materiais Gratuitos
            </Link_Footer>

          </Materials_Footer>


          <TitleSocialMedia_Footer>
            Siga a Leadster
          </TitleSocialMedia_Footer>

          

        </Footer>
    </>
  )
}
