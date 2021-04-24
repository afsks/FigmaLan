import React from 'react';
import styled from 'styled-components';

// -----ComonStyles-----
import { StyledSection } from '../common/commons'
import { TextContainer } from '../common/commons'
import { StyledH2 } from '../common/commons'
import { StyledP } from '../common/commons'
import { StyledH3 } from '../common/commons'
import { StyledDiv } from '../common/commons'
import { Medium } from '../common/commons'
// -----/ComonStyles-----
const STYLEDH3 = styled(StyledH3)`
    margin-bottom: 17px;
`
const StyledDIV = styled(StyledDiv)`
    padding-top: 50px;
`
const StyledInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    min-width: 250px;
    max-width: 350px;
    height: 50px;
    border: none;
    border-radius: 50px;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.6rem;
`
const StyledText = styled(StyledInput)`
    text-align: center;
    margin-top: 30px;
`
const StyledButton = styled(StyledInput)`
    background-color: #EF2779;
    color: #fff;
    margin-top: 15px;
`

const StyledSECTION = styled(StyledSection)`
    padding-top: 90px;
    padding-bottom: 90px;
    background-image: linear-gradient(to top right, #EF2779
, #7834BE);
`
class Newsletter extends React.Component {
    render(){
        return(
            <StyledSECTION>
                <TextContainer>
                    <STYLEDH3 primary>
                        At your fingertips
                    </STYLEDH3>
                    <StyledH2 primary>
                        Newsletter
                    </StyledH2>
                </TextContainer>
                <StyledDIV>
                    <StyledH3 primary>
                        Subcribe to our Newsletter
                    </StyledH3>
                    <StyledP primary inputWeight={Medium}>
                        Avalible explusivery on Figmaland
                    </StyledP>
                    <StyledText></StyledText>
                    <StyledButton as="button" >Subscribe</StyledButton>
                </StyledDIV>
            </StyledSECTION>
        )
    }
}

export default Newsletter;