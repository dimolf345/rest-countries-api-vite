import { useParams, Link } from "react-router-dom"
import {connect} from 'react-redux'
import { selectCountriesCollection } from "../../redux/countries/countries.selector"
import { createStructuredSelector } from "reselect"
import './countrypage.styles.scss'
import ThemeButton from "../../components/button/button.component"
import { CountryPageWrapper, CountryDetailsWrapper, FlagWrapper, TextContainer, CountryDetails } from "./countrypage.styles"
import { themeSelector } from "../../redux/theme/theme.selector"
import BorderList from "../../components/borders-list/border-list.component"

const CountryPage = ({countries, isThemeLight})=> {
    let params = useParams()
    let data  = getCountry(countries, params.countryId)
    console.log(data);
    return (
        <CountryPageWrapper>
        <ThemeButton>
            <Link to="/">
            <span style={{fontSize: '1.5rem'}}>&larr; </span>
                Back</Link>
        </ThemeButton>
        <CountryDetailsWrapper>
            <FlagWrapper>
                <img 
                    className="img"
                    src={data.flag} alt={`${data.name} flag`} />
            </FlagWrapper>
            <TextContainer isThemeLight={isThemeLight}>
                <h2>{data.name}</h2>
                <CountryDetails>
                    <div>
                    <p>Native Name: <span>{data.nativeName}</span></p>
                    <p>Population: <span>{data.population}</span></p>
                    <p>Region: <span>{data.region}</span></p>
                    <p>Sub region: <span>{data.subregion}</span></p>
                    <p>Capital: <span>{data.capital}</span></p>
                    </div>
                    <div>
                        <p>Top Level Domain: <span>{data.topLevelDomain}</span></p>
                        <p>Currencies: <span>{JoinCurrency(data.currencies)}</span></p>
                    </div>
                </CountryDetails>
                    {data.borders?
                       <BorderList countries={countries} bordersArray={data.borders}/>
                    : <p>No borders</p>
                    }
            </TextContainer>
        </CountryDetailsWrapper>
        </CountryPageWrapper>
    )
}


const JoinCurrency = (currenciesArray) => {
    return currenciesArray.reduce((joinedString, currency)=> joinedString.concat(", ", currency.name), "")
}

const getCountry = (countries, id) => countries.filter((country)=> country.alpha3Code == id)[0]





const mapStateToProps = createStructuredSelector({
    countries: selectCountriesCollection,
    isThemeLight: themeSelector,
})

export default connect(mapStateToProps)(CountryPage)