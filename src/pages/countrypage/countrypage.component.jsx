import { useParams, Link } from "react-router-dom"
import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import { selectCountriesCollection } from "../../redux/countries/countries.selector"
import { createStructuredSelector } from "reselect"
import ThemeButton from "../../components/button/button.component"
import { CountryPageWrapper, CountryDetailsWrapper, FlagWrapper, TextContainer, CountryDetails } from "./countrypage.styles"
import { themeSelector } from "../../redux/theme/theme.selector"
import BorderList from "../../components/borders-list/border-list.component"
import Spinner from "../../components/spinner/spinner.component"

const CountryPage = ({countries, isThemeLight})=> {
    let params = useParams()
    let data  = getCountry(countries, params.countryId)
    const [isLoading, setIsLoading] = useState(true)
    const [image, setImage] = useState(null)
    useEffect(()=> {
        fetch(data.flag)
        .then(response=> response.text())
        .then(svg => {
            setIsLoading(false)
            return setImage(svg)
            })
    }, [])


    return (
        <CountryPageWrapper>
        <ThemeButton>
            <Link to="/">
            <span style={{fontSize: '1.5rem'}}>&larr; </span>
                Back</Link>
        </ThemeButton>
        <CountryDetailsWrapper>
            <FlagWrapper>
                {
                isLoading
                ? <Spinner />
                : <img 
                    className="img"
                    src={data.flag} alt={`${data.name} flag`} />

                }
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


//Join currencies takes the array items and return a string with all currencies separated by commas. The substring deletes the first commas that is inserted otherwise
const JoinCurrency = (currenciesArray) => {
    if (!currenciesArray) return <span>No currencies</span>
    return currenciesArray.reduce((joinedString, currency)=> joinedString.concat(", ", currency.name), "").substring(2)
}

const getCountry = (countries, id) => countries.filter((country)=> country.alpha3Code == id)[0]





const mapStateToProps = createStructuredSelector({
    countries: selectCountriesCollection,
    isThemeLight: themeSelector,
})

export default connect(mapStateToProps)(CountryPage)