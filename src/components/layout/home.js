import React from 'react';

import styled from 'styled-components';

import Navbar from './navbar';
import { StyledSection } from '../common/commons';
import { StyledH2 } from '../common/commons';
import { StyledP } from '../common/commons';
import { StyledDiv } from '../common/commons';
import { StyledFigure } from '../common/commons';
import { TryButton } from '../common/commons';
import { StyledImg } from '../common/commons';
import UIimage from '../../assets/imgs/UIimage.png';
import BackgroundM from '../../assets/imgs/backgroundMobile.svg';
import BackgroundD from '../../assets/imgs/BackgroundDesktop.svg';

const Section = styled(StyledSection)`
  height: auto;
  min-height: 100vh;
  padding-top: 0;
  padding-bottom: 0;

  //-----Background Img-----
  background-image: url(${BackgroundM});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  //-----Background Img-----

  overflow: hidden;

  @media (min-width: 560px) and (max-width: 768px) {
    height: auto;
  }
  @media (min-width: 768px) {
    background-image: url(${BackgroundD});
  }
`;

const Hero = styled(StyledDiv)`
  justify-content: space-around;
  max-width: 1440px;
  height: 100vh;
  padding-bottom: 78px;

  @media (min-width: 560px) and (max-width: 768px) {
    height: 650px;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 3fr 2fr;
    justify-items: center;
    align-items: start;
    height: auto;
    padding-top: 60px;
  }
  @media (min-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 160px;
  }
`;

const HeroTitle = styled(StyledDiv)`
  grid-column: 2 / 3;
  width: fit-content;
  min-width: 318px;
  max-width: none;
  margin: 0;
  text-align: center;
`;
const UiSistem = styled(StyledFigure)`
  grid-row: 1 / 3;
  align-self: start;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100%;
    max-width: none;
    margin: 0;
  }
`;
const StyledButton = styled(TryButton)`
  width: 236px;
  height: 65px;
  align-self: center;

  @media (min-width: 768px) {
    background-color: #fff;
    color: #38a3f1;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Section id="home">
        <Navbar />
        <Hero>
          <HeroTitle>
            <StyledH2 primary>
              Lightning fast <br />
              prototyping
            </StyledH2>
            <StyledP primary>
              Most calendars are designed from teams. <br />
              Slate is designed from freelancers
            </StyledP>
          </HeroTitle>
          <UiSistem>
            <StyledImg src={UIimage} />
          </UiSistem>
          <StyledButton primary>Try For Free</StyledButton>
        </Hero>
      </Section>
    );
  }
}

export default Home;
