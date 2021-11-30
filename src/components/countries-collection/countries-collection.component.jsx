import React, {useState, useEffect} from 'react'
import {CountryCollectionContainer, CountryButtonContainer} from './countries-collection.styles';
import ThemeButton from '../button/button.component';
import CountryCard from '../country-card/country-card.component';





const CountriesCollection = ({data, isSearchInProgress, isFetching}) => {
        const [randomCountries, setRandomCountries] = useState([])
        useEffect(() => {
            setRandomCountries(selectRandomCountries(data, 20, isSearchInProgress))
        }, [data])

        useEffect(()=> {
            if(isSearchInProgress) setRandomCountries(data)
        }, [isSearchInProgress])

        return (
            <>
          <CountryCollectionContainer>
            {randomCountries.map((country)=> <CountryCard key={country.alpha3Code} country={country}_/>)}
            </CountryCollectionContainer>
            <CountryButtonContainer>
            {!isFetching && <ThemeButton 
                handleClick={()=>{
                randomCountries.length===data.length
                ?setRandomCountries(selectRandomCountries(data, 20))
                : setRandomCountries(data)}}> 
            {
                randomCountries.length===data.length
                ? "Show less"
                : `Show all ${data.length} countries`
            }</ThemeButton>}
            </CountryButtonContainer>
            </>
        )
}





const selectRandomCountries = (countries, numberOfCountriesToSelect=countries.length) => {
    if (countries.length <= numberOfCountriesToSelect) return countries
   let result = []
   let indextaken = new Set();
   while (result.length < numberOfCountriesToSelect) {
        let currentIndex = getRandomInt(0, countries.length);
        if(!indextaken.has(currentIndex)) {
            indextaken.add(currentIndex)
            result.push(countries[currentIndex])
        }
   }
   return result
}


const getRandomInt = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)+ min)
}


export default CountriesCollection



