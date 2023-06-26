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
  TitleSocialMedia_Footer,
  AnchorFacebook,
  FacebookIcon,
  AnchorInstagram,
  InstagramIcon,
  AnchorLinkedin,
  LinkedInIcon,
  ChanelsLeadster_Footer,
  ContactsLeadster_Footer,
  LinksSocialMedia_Footer,
  Border_Footer,
  Copyright_Footer,
  OfficialSiteLeadster_Footer,
  Additional,
  Address,
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
              width={194}
              height={42}
              alt='logo leadster' 
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

        <Div></Div>

        <Proposal>
          <Image src={Comparative} 
              width={400}
              height={400}
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
                width={185}
                height={55}
                alt='RD Station' />
              </ButtonSet_Proposal>

              <ObjectionBreak>
                <Image src={NoCard} 
                width={16}
                height={16}
                alt='No-card' />
                <NoCardText_Proposal><strong>Não</strong> é necessário Cartão de Crédito</NoCardText_Proposal>
                <Bar_Proposal></Bar_Proposal>
                <Image src={RatingImage} 
                width={16}
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
              width={194}
              height={42}
              alt='logo leadster gif'
          />
          <Slogan_Footer>Transformando visitantes em clientes.</Slogan_Footer>

          <ChanelsLeadster_Footer>
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

            <ContactsLeadster_Footer>
              <TitleSocialMedia_Footer>
              Siga a Leadster
              </TitleSocialMedia_Footer>
              
                <LinksSocialMedia_Footer>
                  <AnchorLinkedin>
                    <LinkedInIcon stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18px" width="18px"
                    xmlns="http://www.w3.org/2000/svg">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                      </path>
                    </LinkedInIcon>
                  </AnchorLinkedin>

                  <AnchorInstagram>
                    <InstagramIcon stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18px" width="18px"
                    xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                        </path>
                    </InstagramIcon>
                  </AnchorInstagram>

                  <AnchorFacebook>
                    <FacebookIcon stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="18px" width="18px" 
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                      </path>
                    </FacebookIcon>
                  </AnchorFacebook>
                </LinksSocialMedia_Footer>
              

              <Link_Footer>
                E-mail: contato@leadster.com.br
              </Link_Footer>

              <Link_Footer>
                Telefone: (42) 98828-9851
              </Link_Footer>
            </ContactsLeadster_Footer>

          </ChanelsLeadster_Footer>

          <Border_Footer></Border_Footer>

          <Additional>
            <Copyright_Footer>
            Copyright © 2015 - 2022 Todos os direitos reservados | <OfficialSiteLeadster_Footer target='_blank' href="https://leadster.com.br/">Leadster</OfficialSiteLeadster_Footer>
            </Copyright_Footer>

            <Address>
              Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
            </Address>
          </Additional>

        </Footer>
    </>
  )
}
