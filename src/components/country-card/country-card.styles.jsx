import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const CardContainer = styled.div`

    width: 26.4rem;
    height: 33.6rem;
    border-radius: 5px;
    padding: 1px 0;
    box-shadow: 0 0 0 2px rgba(0,0,0, 0.05);
    cursor: pointer;
    transition: .2s ease-in;
    background-color: ${props => props.isThemeLight? 'white' : 'hsl(209, 23%, 22%)'};
    color: ${props=> props.isThemeLight? `black` : 'white'};

    &:hover {
        transform: scale(1.02);
    }
`

export const ImageContainer = styled.div`

    height: 16rem;
`

export const CountryImage = styled.img`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: fill;
`

export const WrapperLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: currentColor;
`

export const CountryDetailsContainer = styled.div`
    border-top: 1px solid lightgray;
    height: 100%;
    padding: 2.4rem 2.4rem 0 2.4rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`


export const CountryHeading = styled.h2`
    font-size: 1.8rem;
    margin: 0.5rem 0;
    line-height: 1.2;

`

export const CountryDetail = styled.p`
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;

    span {
        font-weight: 400;
    }
`