import styled from 'styled-components'



const Menu = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 61px;

    width: 100%;
    height: 10vh;
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

const OrdeNationVideos_Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const TextOrdenation_Nav = styled.p`
    margin: 0;
    font-size: 0.9em;
`




export {Menu, Nav, Options_Nav, OrdeNationVideos_Nav, TextOrdenation_Nav}