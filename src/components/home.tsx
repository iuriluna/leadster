import styled from 'styled-components'


const Header = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Logo = styled.img `
  margin: 7px 0 10px;
`

const Branding = styled.section `
  height: 45vh;
  width: 100%;
  background-color: #F0F8FF;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const H1 = styled.h1 `
  color: #007dff;
  font-size: 4.3em;
  margin: -16px;

`

const H2 = styled.h2 `
  font-size: 2.5em;
  font-weight: 500;
  margin: 0px;
  
`

const ButtonHeader = styled.button `
  border-radius: 12px 12px 12px 0px;
  border: 2px solid #007dff;
  padding: 5px 13px;
  font-size: 0.7em;

  background: transparent;
  color: #007dff;
`

const BorderBranding = styled.div `
  border-bottom: 1px solid #dee5eb;
  width: 36%;
`

const TextPromise = styled.p `
  font-size: 0.85em;
`

const StyleH1 = styled.div `
  display: flex;
`

const IconHeader = styled.img `
  margin-left: -24px;
`

/*PROPOSAL*/



/*FOOTER*/

const Footer = styled.footer `
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Slogan_Footer = styled.p `
  color: #A8BAC7;
  font-size: 1em;
  margin: 8px;
`

const ChanelsLeadster_Footer = styled.div`
  display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
`

const Links_Footer = styled.div `
    display: flex;
    flex-direction: column;
`
const PrincipalsLinks_Footer = styled.p `

`
const Link_Footer = styled.a `
  margin-bottom: 12px;
  color: #677294;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: #00aff0;
  }
`

const Cases_Footer = styled.div `
  display: flex;
  flex-direction: column;

`
const TitleCase_Footer = styled.p `


`

const Materials_Footer = styled.div `
  display: flex;
  flex-direction: column;
`


const TitleMaterials_Footer = styled.p `


`

const ContactsLeadster_Footer =styled.div `
  display: flex;
  flex-direction: column;
`

const TitleSocialMedia_Footer = styled.p `


`

const Div = styled.div `

  height: 45vh;
`

const LinksSocialMedia_Footer = styled.div `
    display: flex;
    gap: 15px;
    margin-bottom: 27px;
`

const AnchorFacebook = styled.a `
    width: 46px;
    height: 46px;

    border-radius: 50%;
    font-size: 14px;
    line-height: 45px;
    text-align: center;
    transition: all .2s linear;
    cursor: pointer;

    color: #858da8;
    background: #ebeef5;
    

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
    background: #00aff0;
    color: #fff;
    }
`

const FacebookIcon = styled.svg `

`

const AnchorInstagram = styled.a `
    width: 46px;
    height: 46px;

    border-radius: 50%;
    font-size: 14px;
    line-height: 45px;
    text-align: center;
    transition: all .2s linear;
    cursor: pointer;

    color: #858da8;
    background: #ebeef5;
    

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
    background: #00aff0;
    color: #fff;
    }
`

const InstagramIcon = styled.svg `

`
const AnchorLinkedin = styled.a `
    width: 46px;
    height: 46px;

    border-radius: 50%;
    font-size: 14px;
    line-height: 45px;
    text-align: center;
    transition: all .2s linear;
    cursor: pointer;

    color: #858da8;
    background: #ebeef5;
    

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
    background: #00aff0;
    color: #fff;
    }
`


const LinkedInIcon = styled.svg `

`

const Border_Footer = styled.div `
    border-bottom: 1px solid #e9ecf3;
    padding: 1px 0 55px;
    width: 100%;
`

const Copyright_Footer = styled.p `
  font-size: 0.9em;

`
const OfficialSiteLeadster_Footer = styled.a `
  text-decoration: none;
  color: #007DFF !important;

`
const Additional = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 45px;
    width: 100%;

`
const Address = styled.p `
  font-size: 0.9em;
`







export { Header, Logo, Branding, H1, H2, ButtonHeader, BorderBranding, TextPromise, StyleH1, IconHeader, 
          Footer, Slogan_Footer, Links_Footer, ChanelsLeadster_Footer, PrincipalsLinks_Footer,
          Link_Footer, Cases_Footer, TitleCase_Footer, Materials_Footer, TitleMaterials_Footer, ContactsLeadster_Footer, TitleSocialMedia_Footer, LinksSocialMedia_Footer, 
          AnchorFacebook, FacebookIcon, AnchorInstagram, InstagramIcon, AnchorLinkedin, LinkedInIcon, Border_Footer, Copyright_Footer, OfficialSiteLeadster_Footer, Additional, Address,  Div 
}
