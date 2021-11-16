import React from 'react';
import {connect} from 'react-redux'
// import countriesFetchStartAsync action to create the
// dispatch and fetch data
import {countriesFetchStartAsync} from '../../redux/countries/countries.action';
import {createStructuredSelector} from 'reselect'
import CountriesCollection from '../../components/countries-collection/countries-collection.component';

// TODO
// create an error page to redirect the user if there is 
// a connection error


class HomePage extends React.Component {
    componentDidMount() {
        const {countriesFetchStartAsync} = this.props
        // countriesFetchStartAsync();
    }

    render() {
        return (
            <main>
            <h1>This is the HomePage component</h1>
            <CountriesCollection/>
            </main>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    countriesFetchStartAsync: () => dispatch(countriesFetchStartAsync())
})

export default connect(null, mapDispatchToProps)(HomePage)