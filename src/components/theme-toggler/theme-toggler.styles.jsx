import styled from "styled-components"

export const TogglerContainer = styled.button`
    color: ${props=> props.isThemeLight? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
    outline: none;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    min-width: 12rem;
    font-size: 1.6rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: .5rem;
    font-weight: 600;
 
    span {
        display: inline-block;
    }

    .fa-moons {
        height: 2rem;
        width: 2rem;
        margin-right: 0.7rem;
    }

    @media screen and (max-width: 600px) {
        font-size: 1.2rem;

        .fa-moons {
            height: 1.6rem;
            width: 1.6rem;
        }
    }
`