import React from 'react';
import styled from 'styled-components';

// -----ComonStyles-----
import { StyledSection } from '../../components/common/commons'
// import { TextContainer } from '../../components/common/commons'
import { StyledH2 } from '../../components/common/commons'
import { StyledP } from '../../components/common/commons'
// import { StyledH3 } from '../../components/common/commons'
import { StyledDiv } from '../../components/common/commons'
// import { Medium } from '../../components/common/commons'
import { TryButton } from '../../components/common/commons'
// -----/ComonStyles-----
import DropBox from '../../assets/imgs/dropbox.svg'
import AvatarF from '../../assets/imgs/avatarF.svg'

const StyledDIV = styled(StyledDiv)`
    padding-top: 80px;
`

const Profile = styled.div`
    display: flex;
    width: fit-content;
    height: auto;
    padding-bottom: 50px;
    cursor: pointer;

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 10px;
    } 
`
const StyledH6 = styled.h6`
    font-size: 1.14rem;
    font-weight: 700;
    line-height: 1.52rem;
    color: #374754;
`
const Profession = styled(StyledP)`
    font-size: 1.26rem;
    margin: 0;
`

const STYLEDP = styled(StyledP)`
    font-size: 1.35rem;
    width: 60%;
    min-width: 275px;
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 50px;

    @media (min-width: 600px){
        width: 100%;
    }
`

class Testimonials extends React.Component {
    render(){
        return(
            <StyledSection>
                <StyledH2>
                    Testimonials
                </StyledH2>
                <StyledDIV>
                    <figure>
                        <img src={DropBox} alt="DropBox Logo"/>
                    </figure>
                    <STYLEDP>
                        Most calendars are designed for teams. 
                        Slate is designed for freelancers who want a 
                        simple way to plan their schedule.
                    </STYLEDP>
                    <Profile>
                        <figure>
                            <img src={AvatarF} alt=""/>
                        </figure>
                        <div>
                            <StyledH6>
                                Organize across
                            </StyledH6>
                            <Profession>
                                Ui designer
                            </Profession>
                        </div>
                    </Profile>
                    <TryButton primary as="button">More Testimonials</TryButton>
                </StyledDIV>
            </StyledSection>
        )
    }
}

export default Testimonials;