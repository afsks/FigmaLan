import React from 'react';
import styled from 'styled-components';

// -----ComonStyles-----
import { StyledSection } from '../../components/common/commons'
import { TextContainer } from '../../components/common/commons'
import { StyledH2 } from '../../components/common/commons'
import { StyledP } from '../../components/common/commons'
// import { StyledH3 } from '../../components/common/commons'
import { StyledDiv } from '../../components/common/commons'
import { Medium } from '../../components/common/commons'
import { TryButton } from '../../components/common/commons'
// -----/ComonStyles-----
import Apiary from '../../assets/imgs/apiary.svg'
import Basecamp from '../../assets/imgs/basecamp.svg'
import Android from '../../assets/imgs/android-icon.svg'
import Apple from '../../assets/imgs/apple-store.svg'
import Airbnb from '../../assets/imgs/airbnb.svg'

const StyledDIV = styled(StyledDiv)`
    padding-top: 80px;
    padding-bottom: 80px;

    article:nth-child(1n+4) {
        display: none;
    }  
    @media (min-width: 600px){
        flex-wrap: wrap;
        flex-direction: initial;
        max-width: 950px;


        article:nth-child(1n+4) {
        display: initial;
    }  
    }
` 
const StyledArticle = styled.article`
    width: 240px;
    height: auto;
    margin: 0 auto;
    padding: 0px 25px;
    padding-top: 50px;
    text-align: center;
`
const StyledH5 = styled.h5`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: #374754;
    text-align: center;
    margin-bottom: 20px;
`

class About extends React.Component {
    render(){
        return(
            <StyledSection id="About">
                <TextContainer>
                    <StyledH2>
                        Partners
                    </StyledH2>
                    <StyledP>
                        Most calendars are designed for teams. <br/>
                        Slate is designed for freelancers
                    </StyledP>
                </TextContainer>
                <StyledDIV>
                    <StyledArticle>
                        <StyledH5>
                            Client Name
                        </StyledH5>
                        <figure>
                            <img src={Apiary} alt="Apiary Logo"/>
                        </figure>
                        <StyledP inputWeight={Medium}>
                            Slate helps you see how 
                            many more days you need 
                            to work to reach your 
                            financial goal for
                            the month and year. 
                        </StyledP>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH5>
                            Client Name
                        </StyledH5>
                        <figure>
                            <img src={Android} alt="Android Logo"/>
                        </figure>
                        <StyledP inputWeight={Medium}>
                            Slate helps you see how 
                            many more days you need 
                            to work to reach your 
                            financial goal for
                            the month and year. 
                        </StyledP>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH5>
                            Client Name
                        </StyledH5>
                        <figure>
                            <img src={Basecamp} alt="Basecamp Logo"/>
                        </figure>
                        <StyledP inputWeight={Medium}>
                            Slate helps you see how 
                            many more days you need 
                            to work to reach your 
                            financial goal for
                            the month and year. 
                        </StyledP>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH5>
                            Client Name
                        </StyledH5>
                        <figure>
                            <img src={Apple} alt="Apple Logo"/>
                        </figure>
                        <StyledP inputWeight={Medium}>
                            Slate helps you see how 
                            many more days you need 
                            to work to reach your 
                            financial goal for
                            the month and year. 
                        </StyledP>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH5>
                            Client Name
                        </StyledH5>
                        <figure>
                            <img src={Basecamp} alt="Basecamp Logo"/>
                        </figure>
                        <StyledP inputWeight={Medium}>
                            Slate helps you see how 
                            many more days you need 
                            to work to reach your 
                            financial goal for
                            the month and year. 
                        </StyledP>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH5>
                            Client Name
                        </StyledH5>
                        <figure>
                            <img src={Airbnb} alt="Airbnb Logo"/>
                        </figure>
                        <StyledP inputWeight={Medium}>
                            Slate helps you see how 
                            many more days you need 
                            to work to reach your 
                            financial goal for
                            the month and year. 
                        </StyledP>
                    </StyledArticle>
                </StyledDIV>
                <TryButton primary as="button">Try For Free</TryButton>
            </StyledSection>
        )
    }
}

export default About;