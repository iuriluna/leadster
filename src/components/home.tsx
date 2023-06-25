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





export { Header, Logo, Branding, H1, H2, ButtonHeader, BorderBranding, TextPromise, StyleH1, IconHeader }
