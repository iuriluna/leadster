import {Menu, Nav, Options_Nav, TextOrdenation_Nav} from '../styles/nav-bar'



export default function NavBar() {
    return(
        <>
            <Menu>
                <Nav>
                    <Options_Nav>
                        Agências
                    </Options_Nav>

                    <Options_Nav>
                        Chatbot
                    </Options_Nav>

                    <Options_Nav>
                        Marketing Digital
                    </Options_Nav>

                    <Options_Nav>
                        Geração de Leads    
                    </Options_Nav>

                    <Options_Nav>
                        Mídia Paga
                    </Options_Nav>
                </Nav>

                <TextOrdenation_Nav>
                    Ordenar por:
                </TextOrdenation_Nav>


            </Menu>
        </>
    )
}