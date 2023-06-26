import styled from 'styled-components'

const FooterHome = styled.footer `
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


export {FooterHome, Slogan_Footer, Links_Footer, ChanelsLeadster_Footer, PrincipalsLinks_Footer,
    Link_Footer, Cases_Footer, TitleCase_Footer, Materials_Footer, TitleMaterials_Footer, ContactsLeadster_Footer, TitleSocialMedia_Footer, LinksSocialMedia_Footer, 
    AnchorFacebook, FacebookIcon, AnchorInstagram, InstagramIcon, AnchorLinkedin, LinkedInIcon, Border_Footer, Copyright_Footer, OfficialSiteLeadster_Footer, Additional, Address,}