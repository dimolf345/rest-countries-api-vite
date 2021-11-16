import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectIsFetchingAPI, selectErrorMessage, selectCountriesCollection } from '../../redux/countries/countries.selector';
import { countriesFetchStartAsync } from '../../redux/countries/countries.action';

const selectRandomCountries = (countries, numberOfCountriesToSelect) => {
    if (countries.length <= numberOfCountriesToSelect) return countries
    console.log('countries are', countries)
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


const CountryList = ({data}) => {
    console.log(data);
    const pickedRandomItems = selectRandomCountries(data, 20);
    console.log(pickedRandomItems);
    return (
        <ul>
            { pickedRandomItems.map((item)=> <li key={item.alpha3Code}>
                <p>{item.name}</p>
                <p>{item.population}</p>
                <p>{item.region}</p>
                <p>{item.capital}</p>
            </li>)}
        </ul>
    )
}


class CountriesCollection extends React.Component{
    componentDidMount() {
        const {countriesFetchStartAsync} = this.props
        countriesFetchStartAsync();
    }
    render() {
            const {isFetching, countries, errorMessage} = this.props
        return (
            <div className="countries-collection">
                <h1>Countries collection</h1>

                {isFetching
                ? <h1>Fetching data</h1>
                : errorMessage
                ? <h1>There's an error: {errorMessage}</h1>
                :  countries.length> 0 && <CountryList data={countries}/> }
            </div>
        )
    }
}



const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingAPI,
    countries: selectCountriesCollection,
    errorMessage: selectErrorMessage,
})

const mapDispatchToProps = dispatch => ({
  countriesFetchStartAsync: ()=> dispatch(countriesFetchStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesCollection)