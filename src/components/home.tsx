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
  background-color: aqua;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const H1 = styled.h1 `
  color: #007dff;

`

const H2 = styled.h2 `
  font-size: 2em;
  font-weight: 500;
  
`





export { Header, Logo, Branding, H1, H2 }
