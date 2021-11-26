import styled from "styled-components";

export const SearchInput = styled.input.attrs({
    type: 'search'
})`
    border: none;
    width: 100%;
    outline: none !important;
    height: 100%;
`

export const FormWrapper = styled.form` 
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 2rem 0;
  background: transparent;
`

export const InputWrapper = styled.div`
`