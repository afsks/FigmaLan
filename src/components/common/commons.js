import { render } from '@testing-library/react';
import React from 'react';
import styled,{createGlobalStyle} from 'styled-components';

export const Medium = "400"

export const StyledSection = styled.section`
    position:relative;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    background-color: ${props => props.primary ? "#252B42" : "#fff" };
`
export const TextContainer = styled.div`
    width: 70%;
    min-width: 300px;
    height: auto;
    margin: 0 auto;
    
    /* Fonts */
    text-align: center;
`
export const StyledH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 4.6rem;
    font-weight: 400;
    line-height: 5.7rem;
    text-align: center;
    color: ${props => props.primary ? "#fff" : "#252B42" };
`
export const StyledH3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 3.3rem;
    color: ${props => props.primary ? "#fff" : "#252B42" };
`
export const StyledP = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: ${props => props.inputWeight || "700"};
    line-height: 2rem;
    margin-top: 20px;
    color: ${props => props.primary ? "#fff" : "#374754" };
`
export const StyledDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 320px;
    max-width: 1200px;
    height: auto;
    /* padding-bottom: 50px; */
    margin: 0 auto;
`
export const StyledFigure = styled.figure`
    display: block;
    width: 90%;
    min-width: 280px;
    height: auto;
`
export const StyledImg = styled.img`
    width:100%;
`
export const TryButton = styled.button`
    display: block;
    width: 230px;
    height: 54px;
    border: none;
    margin: 0 auto;
    border-radius: 50px;
    outline: none;
    background-color: ${props => props.primary ? "#38A3F1" : "#fff" };

    /* Font */
    font-family: 'Roboto', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 3.3rem;
    color: ${props => props.primary ? "#fff" : "#38A3F1"};

    &:hover{
        cursor: pointer;
        filter: drop-shadow(0px 0px 5px gray);
    }
    &:active{
        filter: grayscale(0.3);
    }
`
export const StyledInput = styled.input`
    display: flex;
    align-items: center;
    width: fit-content;
    height: 54px;
    padding: 0px 38px;
    border: none;
    border-radius: 40px;
    outline: none;
`


