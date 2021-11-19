import React from "react"
import { Link, Navigate } from "react-router-dom"
import {connect} from 'react-redux'
import {countriesFetchStartAsync} from '../../redux/countries/countries.action';
import {selectErrorMessage, selectIsFetchingAPI, selectCountriesCollection} from '../../redux/countries/countries.selector'

import { createStructuredSelector } from "reselect";

import CountriesCollection from "../../components/countries-collection/countries-collection.component";

class HomePage extends React.Component {
    componentDidMount(){
        const {countriesFetchStartAsync} = this.props
        countriesFetchStartAsync()
    }

    render() {
        const {errorMessage, countries, isFetching} = this.props
        return(
            <div className="homepage">
                <h1>HomePage</h1>
                {isFetching && <h1>Fetching data</h1>}
                {errorMessage && <Navigate to="/error"/>}
                <CountriesCollection data={countries}/>
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