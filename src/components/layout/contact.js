import React from 'react';
import styled from 'styled-components';

// -----ComonStyles-----
import { StyledH2, StyledSection, TextContainer, StyledP,  TryButton, StyledDiv } from '../../components/common/commons'
// import { TextContainer } from '../../components/common/commons'
// import { StyledH2 } from '../../components/common/commons'
// import { StyledP } from '../../components/common/commons'
// import { StyledH3 } from '../../components/common/commons'
// import { Medium } from '../../components/common/commons'
// import { TryButton } from '../../components/common/commons'
// -----/ComonStyles-----

import Twitter from '../../assets/icons/twitter.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Location from '../../assets/icons/location.svg'
import Phone from '../../assets/icons/phoneNumber.svg'
import Mail from '../../assets/icons/mail.svg'

const FlexDiv = styled(StyledDiv)`

    @media (min-width: 1024px){
        justify-content: center;
        flex-direction: row-reverse;
        margin-top: 50px;
    }
`
const StyledDIV = styled(StyledDiv)`
    @media (min-width: 1024px){
        width: fit-content;
        margin: 0;
    }
`
const Social = styled.div`
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;


    div:nth-child(2){
            margin: 0 20px;
    }

    @media (min-width: 1024px){
        padding-top: 0px;
    }
`
const ContactInfo = styled.div`

    div:nth-child(n){
        display: flex;
        align-items: center;
    }
    div:nth-child(2){
        margin: 20px 0;
    }
    img:nth-child(n){
        margin-right: 10px;
    }
    p:nth-child(n){
        margin: 0;
    }
`
const ContactText = styled(StyledP)`
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #FFF;
`
const ContactForm = styled(StyledDiv)`
    width: 90%;
    min-width: 300px;
    max-width: 400px;
    padding: 45px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 50px;

    border: none;
    border-radius: 20px;
    background-color: #FFF;

    @media (min-width: 1024px){
        margin: 0;
    }
`
const InputForm = styled.input`
    width: 100%;
    padding: 20px;
    margin-bottom: 45px;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.6rem;
    border: 1px solid #E8E8E8;
    border-radius: 30px;
    outline: none;
    background-color: #F5F5F5;
`
const TextArea = styled(InputForm)`
    height: 170px;
    text-align: start;
    border-radius: 0px;
`
const ButtonForm = styled(TryButton)`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.6rem;
    color: #fff;
    background-color: #EF2779;
    margin-left: 0;
`
class Contact extends React.Component {
    render(){
        return(
            <StyledSection primary id="Contact">
                <TextContainer>
                    <StyledH2 primary>Contact Us</StyledH2>
                    <StyledP primary>
                        Most calendars are designed for teams. <br/>
                        Slate is designed for freelancers
                    </StyledP>
                </TextContainer>
                <FlexDiv>
                    <StyledDIV>
                        <Social>
                            <div>
                                <img src={Twitter} alt="Twitter icon"/>
                            </div>
                            <div>
                                <img src={Facebook} alt="Facebook icon"/>
                            </div>
                            <div>
                                <img src={Linkedin} alt="Linkedin icon"/>
                            </div>
                        </Social>
                        <ContactInfo>
                            <div>
                                <img src={Location} alt="Location icon"/>
                                <ContactText>
                                    6386 Spring St undefined Anchorage, <br/>
                                    Georgia 12473 United States
                                </ContactText>
                            </div>

                            <div>
                                <img src={Phone} alt="Phone icon"/>
                                <ContactText>
                                    (843) 555-0130
                                </ContactText>
                            </div>

                            <div>
                                <img src={Mail} alt="Mail icon"/>
                                <ContactText>
                                    willie.jennings@example.com
                                </ContactText>
                            </div>
                        </ContactInfo>
                    </StyledDIV>
                    <ContactForm>
                        <InputForm type="text" placeholder="Your Name"/>
                        <InputForm type="text" placeholder="Your Email"/>
                        <TextArea as='textarea' type="text" placeholder="Your Message"/>
                        <ButtonForm>Send</ButtonForm>
                    </ContactForm>
                </FlexDiv>
            </StyledSection>
        )
    }
}

export default Contact;