import styled from 'styled-components'

 export const CountryCollectionContainer = styled.div`
  margin-top: 4.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 26.4rem);
  gap: 7.4rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    gap: 3rem 1.4rem;
    justify-content: center;
  }
 `

 export const CountryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5rem;
 `