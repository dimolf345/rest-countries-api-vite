import React from "react"
import { Link, Navigate } from "react-router-dom"
import {connect} from 'react-redux'
import {countriesFetchStartAsync, countriesFetchFailure} from '../../redux/countries/countries.action';
import {selectErrorMessage, selectIsFetchingAPI} from '../../redux/countries/countries.selector'

import {SetErrorMessage} from '../../redux/errortest/errortest.action'
import { createStructuredSelector } from "reselect";

class HomePage extends React.Component {
    componentDidMount(){
        const {countriesFetchStartAsync} = this.props
        countriesFetchStartAsync()
    }

    render() {
        const {errorMessage, countriesFetchFailure, isFetching} = this.props
        return(
            <div className="homepage">
                <h1>HomePage</h1>
                {isFetching && <h1>Fetching data</h1>}
                {errorMessage && <Navigate to="/error"/>}
                <button
                    onClick={()=> countriesFetchFailure('porco dio')}
                >
                    Set Error Message
                </button>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingAPI,
    errorMessage: selectErrorMessage
})

const mapDispatchToProps = dispatch => ({
    countriesFetchStartAsync: ()=> dispatch(countriesFetchStartAsync()),
})


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)