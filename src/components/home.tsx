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
    width: 186px;
    height: 63px;
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

const Div = styled.div `

  height: 45vh;
`





export { Header, Logo, Branding, H1, H2, ButtonHeader, BorderBranding, TextPromise, StyleH1, IconHeader, 
          Proposal, CTA_Proposal, Question_CTA_Proposal, Text_Proposal, Border_Proposal, ButtonSet_Proposal, Button_Proposal, 
          ObjectionBreak, NoCardText_Proposal, Bar_Proposal, RatingText_Proposal, Div 
}
