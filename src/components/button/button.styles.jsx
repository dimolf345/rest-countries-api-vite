import styled from "styled-components";


export const ThemeButton = styled.button`
    border-radius: 5px;
    box-shadow: 0 0 4px 2px rgba(0,0,0, 0.2);
    border: 2px solid transparent;
    outline: none;
    padding: 0.8rem 2rem;
    background-color: ${props => props.isThemeLight? 'white' : 'hsl(209, 23%, 22%)'};
    cursor: pointer;
    color: ${props=> props.isThemeLight? `black` : 'white'};
    transition: all .2s ease;
    a {
        text-decoration: none;
        color: currentColor
    }

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 8px 4px rgba(0,0,0, 0.2);
    }
`