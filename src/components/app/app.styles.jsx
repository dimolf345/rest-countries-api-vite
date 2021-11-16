import styled from "styled-components"

export const BackgroundWrapper = styled.div`
transition: all .2s ease;
  min-height: 100vh;
  color: hsl(200, 15%, 8%);
  background-color: ${props => props.isThemeLight? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};

  & > * {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`