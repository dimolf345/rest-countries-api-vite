import React, {useState, useEffect} from 'react'
import './countries-collection.styles.scss'
import {connect} from 'react-redux'
import { selectCountriesCollection } from '../../redux/countries/countries.selector'
import {createStructuredSelector} from 'reselect'
import {Link, Outlet} from 'react-router-dom'
import CountryCard from '../country-card/country-card.component'

import Spinner from '../spinner/spinner.component'








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
            {randomCountries.map((country)=>(
               <div key={country.alpha3Code} className="country">
                    <Link 
                    key={country.alpha3Code}
                    country={country}
                    to={`/countries/${country.alpha3Code}`} >
                        <div className="country-img">
                            <img 
                            className="img"
                            src={country.flag} alt="" />
                        </div>
                    </Link>
                    <Outlet/>
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