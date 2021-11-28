import styled from "styled-components";

export const SearchInput = styled.input.attrs({
  type: 'search'
})`
    border: none;
    width: 100%;
    outline: none !important;
    height: 100%;
    background-color: transparent;
    margin-left: 2.4rem;
  color: currentColor
`

export const FormWrapper = styled.form` 
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 2rem 0;
  background: transparent;



`

export const InputWrapper = styled.div`
  padding: 1rem 3.2rem;
  background-color: white;
  width: 60%;
  max-width: 48rem;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  height: 5.6rem;
  display: flex;
  flex-flow: row nowrap;
  border: 2px solid transparent;
  align-items: center;
  background-color: ${props => props.isThemeLight? 'white' : 'hsl(209, 23%, 22%)'};
  color: ${props=> props.isThemeLight? '#848484' : 'hsl(0, 0%, 100%)'};

  &:focus-within {
    border: 2px solid transparent;
        border-color: ${props => props.isThemeLight? 'darkgray' : 'lightgray'} !important;
 }

   @media screen and (max-width: 600px) {
    padding: 0 3rem;
    width: 100%;
    margin-bottom: 3rem;
    max-width: none;
  }
`