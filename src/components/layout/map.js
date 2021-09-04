import React from 'react';
import styled from 'styled-components';

import { StyledH2, StyledSection, TextContainer, StyledP } from '../../components/common/commons'

import Twitter from '../../assets/icons/twitter.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Location from '../../assets/icons/location.svg'
import Phone from '../../assets/icons/phoneNumber.svg'
import Mail from '../../assets/icons/mail.svg'

const SectionFlex = styled(StyledSection)`
    @media (min-width: 1024px){
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        padding: 120px 0px;
    }
`
const TextContainerMedia = styled(TextContainer)`
    @media (min-width: 1024px){
        min-width: auto;
        width: fit-content;
        margin: 0;
    }
`
const GoogleContainer = styled.div`
    width: 80%;
    min-width: 300px;
    max-width: 470px;
    height: 250px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 22px;
    overflow: hidden;
    box-sizing: initial;

    @media (min-width: 1024px){
        margin: 0px;
        padding: 0px;
    }
`
const GoogleMap = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`
const ContactInfo = styled.div`
    width: fit-content;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

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
    @media (min-width: 1024px){
        margin: 0px;
        margin-bottom: 20px;
        padding: 0px;
    }
`
const ContactText = styled(StyledP)`
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #374754;
`
const Social = styled.div`
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;


    div:nth-child(2){
            margin: 0 20px;
    }

    @media (min-width: 1024px){
        margin-top: auto;
        padding-top: 0px;
        padding-bottom: 0px;
    }
`

class Map extends React.Component {
    render(){
        return(
            <SectionFlex>
                <TextContainerMedia>
                    <StyledH2>Pages</StyledH2>
                    <StyledP>Eleanor Edwards</StyledP>
                    <StyledP>Ted Robertson</StyledP>
                    <StyledP>Annette Russell</StyledP>
                    <StyledP>Jennie Mckinney</StyledP>
                    <StyledP>Gloria Richards</StyledP>
                </TextContainerMedia>
                <GoogleContainer>
                    <GoogleMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6307.2008793204595!2d-122.  42034877655041!3d37.  77596600007582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13. 1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2switt  er!5e0!3m2!1ses!2sco!4v1618371753748!5m2!1ses!2sco"    allowfullscreen="" loading="lazy"></GoogleMap>
                </GoogleContainer>
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
                        </ContactInfo>
            </SectionFlex>
        )
    }
}

export default Map;