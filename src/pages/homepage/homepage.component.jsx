import React from "react"
import { Link, Navigate } from "react-router-dom"
import {connect} from 'react-redux'
import {countriesFetchStartAsync} from '../../redux/countries/countries.action';
import { createStructuredSelector } from "reselect";
import {selectErrorMessage, selectIsFetchingAPI, selectCountriesCollection} from '../../redux/countries/countries.selector'
import { selectRegionFilter, selectSearch } from "../../redux/filters/filters.selector";
import CountriesCollection from "../../components/countries-collection/countries-collection.component";
import FiltersForm from "../../components/filters-form/filters-form.component";
import Spinner from "../../components/spinner/spinner.component";


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            isSearchInProgress: false
        }
    }

    componentDidMount(){
        const {countriesFetchStartAsync, countries} = this.props
        if(countries.length===0) countriesFetchStartAsync()
    }


    filterCountriesBySearch = (countries) => {
        return this.props.search
        ? countries.filter(country => country.name.toLowerCase().includes(this.props.search.toLowerCase()))
        : countries
    }


    filterCountriesByRegion = (countries) => {
        return this.props.regionFilter
        ? countries.filter(country => country.region === this.props.regionFilter)
        : countries
    }


    isSearchInProgress = () => {
        console.log(this.props.regionFilter, this.props.search)
        return this.props.regionFilter!== '' || this.props.search !== ''
    }


    render() {
        const {errorMessage, countries, isFetching,} = this.props

        return(
            <div style={{position: 'relative'}} className="homepage">
                <FiltersForm />
                {isFetching &&  <Spinner />}
                {errorMessage && <Navigate to="/error"/>}
                <CountriesCollection 
                    isSearchInProgress = {this.isSearchInProgress()}
                    data={this.filterCountriesBySearch(this.filterCountriesByRegion(countries))}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingAPI,
    errorMessage: selectErrorMessage,
    countries: selectCountriesCollection,
    regionFilter: selectRegionFilter,
    search: selectSearch,
})

const mapDispatchToProps = dispatch => ({
    countriesFetchStartAsync: ()=> dispatch(countriesFetchStartAsync()),
})


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)