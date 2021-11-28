import { useParams, Link } from "react-router-dom"
import {connect} from 'react-redux'
import { selectCountriesCollection } from "../../redux/countries/countries.selector"
import { createStructuredSelector } from "reselect"
import './countrypage.styles.scss'
import ThemeButton from "../../components/button/button.component"

const CountryPage = ({countries})=> {
    let params = useParams()
    let data  = getCountry(countries, params.countryId)
    console.log(data);
    return (
        <div className="countrypage">
        <ThemeButton>
            <Link to="/">
            <span style={{fontSize: '1.5rem'}}>&larr; </span>
                Back</Link>
        </ThemeButton>
        <div className="country">
            <div className="img-container">
                <img 
                    class="img"
                    src={data.flag} alt="" />
            </div>
            <div className="details-container">
                <h2>{data.name}</h2>
            </div>
        </div>
        </div>
    )
}

const getCountry = (countries, id) => countries.filter((country)=> country.alpha3Code == id)[0]


const mapStateToProps = createStructuredSelector({
    countries: selectCountriesCollection
})

export default connect(mapStateToProps)(CountryPage)