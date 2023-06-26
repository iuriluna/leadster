
import {ProposalMarketing,
    CTA_Proposal,
    Question_CTA_Proposal,
    Text_Proposal,
    Border_Proposal,
    ButtonSet_Proposal,
    ObjectionBreak,
    Button_Proposal,
    NoCardText_Proposal,
    Bar_Proposal,
    RatingText_Proposal,} from '../styles/proposal'

import Image from 'next/image'

import Comparative from '../assets/comparativo_img_CTA.png'
import RdStation from '../assets/selo_RD.png'
import NoCard from '../assets/no-card-dark.webp'
import RatingImage from '../assets/rating.webp'

export default function Proposal() {
    return (

        <>
            <ProposalMarketing>
                    <Image src={Comparative} 
                        width={400}
                        height={400}
                        alt='Comparative Leadster' 
                    />

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
                            width={92}
                            height={16}
                            alt='Rating' />
                            <RatingText_Proposal>
                            4.9/5 média de satisfação
                            </RatingText_Proposal>
                        </ObjectionBreak>
                    </CTA_Proposal>
            </ProposalMarketing>
        </>
    )
}