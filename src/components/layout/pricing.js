import React from 'react';
import styled from 'styled-components';

// -----ComonStyles-----
import { StyledH2, StyledSection, TextContainer, StyledP, StyledDiv, TryButton } from '../../components/common/commons';
// import { TextContainer } from '../../components/common/commons'
// import { StyledH2 } from '../../components/common/commons'
// import { StyledP } from '../../components/common/commons'
// import { StyledH3 } from '../../components/common/commons'
// import { StyledDiv } from '../../components/common/commons'
// import { Medium } from '../../components/common/commons'
// import { TryButton } from '../../components/common/commons'
// -----/ComonStyles-----

const PricingText = styled(TextContainer)`
  padding-top: 50px;
  padding-bottom: 50px;
`;
const FlexDiv = styled(StyledDiv)`
  @media (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: initial;
    justify-content: space-around;
  }
`;
const StyledArticle = styled.article`
  width: 300px;
  height: 290px;
  padding: 30px;
  margin-bottom: 40px;
  background-image: ${(props) => (props.primary ? 'linear-gradient(to top right, #EF2779, #7834BE)' : 'none')};
  border: 1px solid #dedede;
  border-radius: 10px;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);

  @media (min-width: 440px) {
    width: 335px;
    height: 310px;
    padding: 40px;
  }
  @media (min-width: 1000px) {
    margin: 0 20px;
    margin-bottom: 40px;
  }
`;
const TitleCard = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3.3rem;
  text-align: start;
  color: ${(props) => (props.primary ? '#fff' : '#252B42')};
`;
const SubTitleCard = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  text-align: start;
  color: ${(props) => (props.primary ? '#fff' : '#374754')};
`;
const PriceNumber = styled.p`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 20px 0;
  margin-left: 20px;
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 6.55rem;
  color: ${(props) => (props.primary ? '#fff' : '#252B42')};

  span:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;

    span:nth-child(1) {
      display: block;
      font-size: 20px;
      text-align: start;
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 3.3rem;
      padding: 0;
    }
    span:nth-child(2) {
      display: block;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.8rem;
      color: ${(props) => (props.primary ? '#fff' : '#374754')};
      padding-bottom: 10px;
    }
  }
`;
const PrimaryButton = styled(TryButton)`
  color: #ef2779;
  background-color: #fff;
`;

class Pricing extends React.Component {
  render() {
    return (
      <StyledSection id="Pricing">
        <PricingText>
          <StyledH2>Pricing</StyledH2>
          <StyledP>
            Most calendars are designed for teams. <br />
            Slate is designed for freelancers
          </StyledP>
        </PricingText>
        <FlexDiv>
          <StyledArticle>
            <div>
              <TitleCard>FREE</TitleCard>
              <SubTitleCard>Organize across all apps by hand</SubTitleCard>
              <PriceNumber>
                0{' '}
                <span>
                  <span>$</span>
                  <span primary>Per Month</span>
                </span>
              </PriceNumber>
            </div>
            <TryButton primary as="button">
              Order Now
            </TryButton>
          </StyledArticle>
          <StyledArticle>
            <div>
              <TitleCard>STANDART</TitleCard>
              <SubTitleCard>Organize across all apps by hand</SubTitleCard>
              <PriceNumber>
                10{' '}
                <span>
                  <span>$</span>
                  <span>Per Month</span>
                </span>
              </PriceNumber>
            </div>
            <TryButton primary as="button">
              Order Now
            </TryButton>
          </StyledArticle>
          <StyledArticle primary>
            <div>
              <TitleCard primary>BUSINESS</TitleCard>
              <SubTitleCard primary>Organize across all apps by hand</SubTitleCard>
              <PriceNumber primary>
                99{' '}
                <span>
                  <span>$</span>
                  <span>Per Month</span>
                </span>
              </PriceNumber>
            </div>
            <PrimaryButton primary as="button">
              Order Now
            </PrimaryButton>
          </StyledArticle>
        </FlexDiv>
      </StyledSection>
    );
  }
}

export default Pricing;
