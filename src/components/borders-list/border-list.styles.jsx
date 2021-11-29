import styled from "styled-components";



export const BorderListContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    flex-wrap: wrap;
    justify-content: flex-start;

    p {
        margin-right: 0.8rem;
        margin-bottom: 0.8rem;
    }

    button {
        padding: .5rem 1rem
    }

    li {
        width: max-content;
        margin-right: 0.8rem;
        margin-bottom: 0.8rem;
    }

    @media screen and (max-width: 700px) {
        p {
            width: 100%;
        }
    }
`