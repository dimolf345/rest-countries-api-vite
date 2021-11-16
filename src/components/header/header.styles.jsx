import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: ${props => props.isThemeLight? 'white' : 'hsl(209, 23%, 22%)'};
    padding: 2.4rem 8rem;
    transition: all .2s ease;
    height: 8rem;
`


export const HeadingContainer = styled.h1`
    font-weight: 700;
    font-size: 2.4rem;
    color: ${props=> props.isThemeLight? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
`

export const ButtonContainer = styled.button`
    color: ${props=> props.isThemeLight? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 11rem;

    &:hover {
    border: 1px solid black;
    }
`