import { useParams, Link } from "react-router-dom"
import {connect} from 'react-redux'
import { selectCountriesCollection } from "../../redux/countries/countries.selector"
import { createStructuredSelector } from "reselect"

const CountryPage = ({countries})=> {
    let params = useParams()
    let data  = getCountry(countries, params.countryId)
    return (
        <div className="countrypage">
        <h1>
            Countrypage
        </h1>
        <Link to="/">Go Back</Link>
        </div>
    )
}

const getCountry = (countries, id) => countries.filter((country)=> country.alpha3Code == id)[0]


const mapStateToProps = createStructuredSelector({
    countries: selectCountriesCollection
})

export default connect(mapStateToProps)(CountryPage)