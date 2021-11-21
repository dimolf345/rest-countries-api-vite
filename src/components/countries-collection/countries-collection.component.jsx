import React, {useState, useEffect} from 'react'
import './countries-collection.styles.scss'
import {connect} from 'react-redux'
import { selectCountriesCollection } from '../../redux/countries/countries.selector'
import {createStructuredSelector} from 'reselect'








const CountriesCollection = ({data}) => {
        const [randomCountries, setRandomCountries] = useState([])
        useEffect(() => {
            setRandomCountries(selectRandomCountries(data, 20))
        }, [data])

        return (
        <div className="countries-collection">
        <div className="countries">
            {randomCountries.map((country)=>(
               <div key={country.alpha3Code} className="country">
                <div className="country-img"></div>
                <div className="country-details">
                    <h2 className="country-name">{country.name}</h2>
                    <p className="country-detail">Population: <span>{country.population.toLocaleString()} abitants</span></p>
                    <p className="country-detail">Region: <span>{country.region}</span></p>
                    <p className="country-detail">Capital: <span>{country.capital}</span></p>
               </div> 
            </div>
            ))}
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





const selectRandomCountries = (countries, numberOfCountriesToSelect) => {
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