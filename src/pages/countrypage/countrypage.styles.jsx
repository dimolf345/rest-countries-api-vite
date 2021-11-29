import styled from "styled-components";

export const CountryPageWrapper = styled.div`
    padding-top: 7rem;

        p {
        font-weight: 600;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 700px) {
        padding-top: 4rem;

        p {
            margin-bottom: 1rem;
        }
    } 
`

export const CountryDetailsWrapper = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`

export const FlagWrapper = styled.div`
    width: 50%;
    max-width: 500px;
    margin-right: 4rem;
    img {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 850px) {
        margin-right: 3%;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 4rem;
    }
`

export const TextContainer = styled.div`
    background-color: transparent;
    color: ${props=> props.isThemeLight? `black` : 'white'};
    display: flex;
    padding-left: 2rem;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    h2 {
        font-size: 3rem;
    }
    @media screen and (max-width: 800px) {
        padding-left: 0;
    }

    @media screen and (max-width: 700px) {
        width: 100%;

        h2 {
            margin-bottom: 1.6rem;
        }
    }
`

export const CountryDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: auto;
    row-gap: 4rem;



    span {
        font-weight: 400;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
