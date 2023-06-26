import styled from 'styled-components'

const ProposalMarketing = styled.section `
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

export {ProposalMarketing, CTA_Proposal, Question_CTA_Proposal, Text_Proposal, Border_Proposal, ButtonSet_Proposal, Button_Proposal, 
    ObjectionBreak, NoCardText_Proposal, Bar_Proposal, RatingText_Proposal}