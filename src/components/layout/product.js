import React from 'react';
import styled from 'styled-components';

// -----Assets-----
import Figures from '../../assets/icons/figures.svg';
import Draw from '../../assets/icons/draw.svg';
import Food from '../../assets/icons/food.svg';
import Data from '../../assets/imgs/data.svg';
// -----Assets-----

// -----ComonStyles-----
import { StyledSection } from '../../components/common/commons';
import { TextContainer } from '../../components/common/commons';
import { StyledH2 } from '../../components/common/commons';
import { StyledP } from '../../components/common/commons';
import { StyledH3 } from '../../components/common/commons';
import { StyledDiv } from '../../components/common/commons';
import { StyledFigure } from '../../components/common/commons';
import { StyledImg } from '../../components/common/commons';
import { TryButton } from '../../components/common/commons';
// import {  } from '../../components/common/commons'
// -----/ComonStyles-----

const StyledSECTION = styled(StyledSection)`
  padding-top: 70px;
`;
const TextCONTAINER = styled(TextContainer)`
  padding-bottom: 100px;
`;
const StyledH2MARGIN = styled(StyledH2)`
  margin: 20px 0;
`;
const StyledH3MARGIN = styled(StyledH3)`
  padding-left: 10px;
  text-align: start;
`;
const StyledArticle = styled.article`
  min-width: 270px;
  max-width: 270px;
  margin: 0 auto;
  padding: 0px 25px;
  margin-bottom: 100px;
`;
const Figure = styled.figure`
  display: inline-flex;
  align-items: center;
  padding-left: 10px;
`;
const STYLEDP = styled(StyledP)`
  font-weight: 400;
  color: #374754;
`;
const StyledDivMARGIN = styled.div`
  display: flex;
`;
const ProductCards = styled(TextContainer)`
  width: 100%;
  max-width: 870px;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: space-around;
  min-width: 270px;
  padding-bottom: 100px;
`;
const StyledButton = styled(TryButton)`
  margin: 60px 0;
`;

class Product extends React.Component {
  render() {
    return (
      <StyledSECTION id="Product">
        <TextCONTAINER>
          <StyledH3>At your fingertips</StyledH3>
          <StyledH2MARGIN>Features</StyledH2MARGIN>
          <StyledP>
            Most calendars are designed for teams. <br />
            Slate is designed for freelancers
          </StyledP>
        </TextCONTAINER>
        <ProductCards>
          <StyledArticle>
            <StyledDivMARGIN>
              <Figure>
                <img src={Figures} alt="icon product" />
              </Figure>
              <StyledH3MARGIN>The best product start with Sketch</StyledH3MARGIN>
            </StyledDivMARGIN>
            <STYLEDP>Slate helps you see how many more days you need to work toreach your financial goal.</STYLEDP>
          </StyledArticle>
          <StyledArticle>
            <StyledDivMARGIN>
              <Figure>
                <img src={Draw} alt="icon organize" />
              </Figure>
              <StyledH3MARGIN>Faster way to organize</StyledH3MARGIN>
            </StyledDivMARGIN>
            <STYLEDP>Slate helps you see how many more days you need to work toreach your financial goal.</STYLEDP>
          </StyledArticle>
          <StyledArticle>
            <StyledDivMARGIN>
              <Figure>
                <img src={Food} alt="icon together" />
              </Figure>
              <StyledH3MARGIN>Work better together</StyledH3MARGIN>
            </StyledDivMARGIN>
            <STYLEDP>Slate helps you see how many more days you need to work toreach your financial goal.</STYLEDP>
          </StyledArticle>
        </ProductCards>
        <TextContainer>
          <StyledH2>Lightning fast prototyping</StyledH2>
          <StyledP>
            Most calendars are designed for teams. <br />
            Slate is designed for freelancers
          </StyledP>
        </TextContainer>
        <StyledDiv>
          <StyledButton primary>Try For Free</StyledButton>
          <StyledFigure>
            <StyledImg src={Data} />
          </StyledFigure>
        </StyledDiv>
      </StyledSECTION>
    );
  }
}

export default Product;
