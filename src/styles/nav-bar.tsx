import styled from 'styled-components'



const Menu = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

const Nav = styled.nav`
    display: flex;
    gap: 12px;
`

const Options_Nav = styled.button`
    background-color: transparent;
    color: #201e1e;
    font-size: 0.8em;
    font-weight: 500;
    border-radius: 40px;
    border: 1px solid #201e1e;
    width: 122px;
    height: 33px;
    cursor: pointer;
    transition: all .3s linear;

    &:hover {
    color: #007dff;
    box-shadow: none;
    border: 1px solid #007dff;
    }

    &:focus {
    background-color: #007dff;
    color: white;
    border: none;
    }
`

const TextOrdenation_Nav = styled.p`
    margin: 0;
    font-size: 0.9em;
`


export {Menu, Nav, Options_Nav, TextOrdenation_Nav}