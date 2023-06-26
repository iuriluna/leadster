import styled from 'styled-components'


const Header = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Logo = styled.img `
  margin-top: 10px;
  margin-bottom: 30px;
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
  font-size: 4em;
  margin: 0px;

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
  width: 32%;
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

const Proposal = styled.section `
  width: 100%;
  height: 62vh;
  background-color: #F0F8FF;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 20px;
`

const CTA_Proposal = styled.div `
    display: flex;
    flex-direction: column;
`

const Question_CTA_Proposal = styled.p `
  font-size: 2em;
  margin: 0px;
`

const Text_Proposal = styled.p `
  margin-top: 7px;
`

const Border_Proposal = styled.div `
  border-bottom: 2px solid #dee5eb;
  width: 120%;
  margin-bottom: 22px;
`

const ButtonSet_Proposal = styled.div `
  display: flex;
  margin-bottom: 12px;
  justify-content: space-evenly;
`

const Button_Proposal = styled.button `
    background-color: #007dff;
    color: white;
    font-size: 0.8em;
    font-weight: 700;
    border-radius: 40px;
    border: none;
    width: 205px;
    height: 56px;
    cursor: pointer;
    transition: all .4s linear;

    &:hover {
    color: #007dff;
    background-color: #fff;
    box-shadow: none;
    border: 1px solid #1857c1;
    
    }
`

const ObjectionBreak = styled.div`
    display: flex;
    margin: 0;
`

const NoCardText_Proposal = styled.p `
      font-size: 0.8em;
      margin: 0px 6px;
`

const Bar_Proposal = styled.div `
    width: 1px;
    height: 16px;
    background-color: black;
    margin-right: 7px;
`

const RatingText_Proposal = styled.p `
    margin: 0;
    margin-left: 5px;
    font-size: 0.8em;
    font-weight: 600;
`

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
          Proposal, CTA_Proposal, Question_CTA_Proposal, Text_Proposal, Border_Proposal, ButtonSet_Proposal, Button_Proposal, 
          ObjectionBreak, NoCardText_Proposal, Bar_Proposal, RatingText_Proposal, Footer, Slogan_Footer, Links_Footer, ChanelsLeadster_Footer, PrincipalsLinks_Footer,
          Link_Footer, Cases_Footer, TitleCase_Footer, Materials_Footer, TitleMaterials_Footer, ContactsLeadster_Footer, TitleSocialMedia_Footer, LinksSocialMedia_Footer, 
          AnchorFacebook, FacebookIcon, AnchorInstagram, InstagramIcon, AnchorLinkedin, LinkedInIcon, Border_Footer, Copyright_Footer, OfficialSiteLeadster_Footer, Additional, Address,  Div 
}
