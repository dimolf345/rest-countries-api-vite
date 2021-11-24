import React, {useState, useEffect} from 'react'
import './countries-collection.styles.scss'
import {connect} from 'react-redux'
import { selectCountriesCollection } from '../../redux/countries/countries.selector'
import {createStructuredSelector} from 'reselect'
import CountryCard from '../country-card/country-card.component';





const CountriesCollection = ({data, isSearchInProgress}) => {
        const [randomCountries, setRandomCountries] = useState([])
        useEffect(() => {
            setRandomCountries(selectRandomCountries(data, 2, isSearchInProgress))
        }, [data])

        useEffect(()=> {
            if(isSearchInProgress) setRandomCountries(data)
        }, [isSearchInProgress])

        return (
        <div className="countries-collection">
        <div className="countries">
            {randomCountries.map((country)=> <CountryCard key={country.alpha3Code} country={country}_/>)}
            </div>
            <button onClick={()=>{
                randomCountries.length===data.length
                ?setRandomCountries(selectRandomCountries(data, 20))
                : setRandomCountries(data)}}> 
            {
                randomCountries.length===data.length
                ? "Show less"
                : `Show all ${data.length} countries`
            }</button>
        </div>
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



const mapStateToProps = createStructuredSelector({
    countries: selectCountriesCollection
})






export default connect(mapStateToProps)(CountriesCollection)



