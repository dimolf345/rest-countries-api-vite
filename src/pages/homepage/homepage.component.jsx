import React from "react"
import { Link, Navigate } from "react-router-dom"
import {connect} from 'react-redux'
import {countriesFetchStartAsync} from '../../redux/countries/countries.action';
import {selectErrorMessage, selectIsFetchingAPI, selectCountriesCollection} from '../../redux/countries/countries.selector'

import { createStructuredSelector } from "reselect";

import CountriesCollection from "../../components/countries-collection/countries-collection.component";

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            searchInput: '',
            regionFilter : '',
            isSearchInProgress: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        const {countriesFetchStartAsync} = this.props
        countriesFetchStartAsync()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(this.isSearchInProgress) this.setState({
            isSearchInProgress: true
        })
    }


    filterCountriesBySearch = (countries) => {
        return this.state.searchInput
        ? countries.filter(country => country.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
        : countries
    }


    filterCountriesByRegion = (countries) => {
        return this.state.regionFilter
        ? countries.filter(country => country.region === this.state.regionFilter)
        : countries
    }


    isSearchInProgress = () => {
        return this.state.searchInput!== '' || this.state.regionFilter !== ''
    }


    render() {
        const {errorMessage, countries, isFetching} = this.props
        return(
            <div className="homepage">
                <input 
                name="searchInput"
                type="search" value={this.state.searchInput} onChange={this.handleChange}/>
                <select onChange={this.handleChange} name="regionFilter" id="">
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <h1>HomePage</h1>
                {isFetching && <h1>Fetching data</h1>}
                {errorMessage && <Navigate to="/error"/>}
                <CountriesCollection 
                    isSearchInProgress = {this.state.isSearchInProgress}
                    data={this.filterCountriesBySearch(this.filterCountriesByRegion(countries))}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingAPI,
    errorMessage: selectErrorMessage,
    countries: selectCountriesCollection
})

const mapDispatchToProps = dispatch => ({
    countriesFetchStartAsync: ()=> dispatch(countriesFetchStartAsync()),
})


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)