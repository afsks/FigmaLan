import React from 'react';
import styled from 'styled-components';

import { StyledSection, TryButton, StyledDiv, StyledInput } from '../../components/common/commons';

import Logo from '../../assets/logo.svg';
import Menu from '../../assets/menu.svg';

const StyledSectionNav = styled(StyledSection)`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 78px;
  margin: 0 auto;
  padding: 0px;
  background-color: initial;

  @media (min-width: 1024px) {
    height: 160px;
  }
`;

const StyledFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
const BurgerMenu = styled(StyledFigure)`
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;
const BurgerMenuOff = styled(BurgerMenu)`
  display: none;
`;

const StyledDivMenu = styled(StyledDiv)`
  position: absolute;
  top: 78px;
  right: -100%;
  max-width: 1440px;
  height: 100vh;
  justify-content: flex-start;
  background-image: linear-gradient(to top right, #ef2779, #7834be);
  z-index: 1000;
  transition: 300ms;

  @media (min-width: 1024px) {
    position: initial;
    top: initial;
    right: initial;
    max-width: 895px;
    height: auto;
    margin: 0;
    flex-direction: initial;
    justify-content: space-between;
    background-image: none;
  }
`;

const StyledNavMenu = styled(StyledDiv)`
  padding-top: 20px;
  padding-bottom: 20px;

  div:nth-child(n) {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 10px;
    box-shadow: 0px 0px 1px white;

    &:active {
      filter: invert(0.5);
    }

    @media (min-width: 500px) {
      justify-content: center;
    }
    @media (min-width: 1024px) {
      box-shadow: none;
    }
  }
  //Fonts-----
  a:nth-child(n) {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.7rem;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    width: inherit;
  }

  @media (min-width: 500px) {
    width: 100%;
    flex-direction: initial;
    justify-content: space-around;
    /* transition: 1s; */
  }
  @media (min-width: 1024px) {
    max-width: 422px;
    margin: 0;
    padding: 0;
  }
`;
const StyledSubscribe = styled(StyledNavMenu)`
  padding: 0px;

  @media (max-width: 1023px) {
    flex-direction: column;
    width: 100%;
    max-width: 270px;
  }
`;
const StyledInputEmail = styled(StyledInput)`
  width: 100%;
  max-width: 270px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;
const StyledButton = styled(TryButton)`
  width: 100%;
  max-width: 270px;
  min-width: 130px;
  color: #ef2779;

  @media (min-width: 500px) {
    margin: 0;
  }
  @media (min-width: 1024px) {
    width: 140px;
    margin: 0 15px;
  }
`;

function navFunction() {
  //-----Cambio de Menu------
  document.getElementById('menuOn').style.display = 'none';
  document.getElementById('menuOff').style.display = 'flex';
  //-----Cambio de Menu------

  document.getElementById('divMenu').style.right = '0';
  document.getElementById('body').style.overflowY = 'hidden';
}
function navFunctionOff() {
  //-----Cambio de Menu------
  document.getElementById('menuOn').style.display = 'flex';
  document.getElementById('menuOff').style.display = 'none';
  //-----Cambio de Menu------

  document.getElementById('divMenu').style.right = '-100%';
  document.getElementById('body').style.overflowY = 'auto';
}

class Navbar extends React.Component {
  render() {
    return (
      <StyledSectionNav>
        <StyledFigure>
          <img src={Logo} alt="Logo Img" />
        </StyledFigure>
        <BurgerMenu id="menuOn" onClick={navFunction}>
          <img src={Menu} alt="Menu Icon" />
        </BurgerMenu>
        <BurgerMenuOff id="menuOff" onClick={navFunctionOff}>
          <img src={Menu} alt="Menu Icon" />
        </BurgerMenuOff>
        <StyledDivMenu id="divMenu">
          <StyledNavMenu>
            <div>
              <a href="#home">Home</a>
            </div>
            <div>
              <a href="#Product">Product</a>
            </div>
            <div>
              <a href="#Pricing">Pricing</a>
            </div>
            <div>
              <a href="#About">About</a>
            </div>
            <div>
              <a href="#Contact">Contact</a>
            </div>
          </StyledNavMenu>
          <StyledSubscribe>
            <StyledInputEmail type="text" placeholder="Your Email" />
            <StyledButton>Subsribe</StyledButton>
          </StyledSubscribe>
        </StyledDivMenu>
      </StyledSectionNav>
    );
  }
}

export default Navbar;
