import { CardContainer, ImageContainer, CountryImage, WrapperLink, CountryDetailsContainer, CountryHeading, CountryDetail } from "./country-card.styles"
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect"
import { themeSelector } from "../../redux/theme/theme.selector"
import Spinner from "../spinner/spinner.component"
import React, {useState, useEffect} from 'react'

const CountryCard = ({country, isThemeLight}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [image, setImage] = useState(null)
    useEffect(()=> {
        fetch(country.flag)
        .then(response=> response.text())
        .then(svg => {
            setIsLoading(false)
            return setImage(svg)
            })
    }, [])
    return (
        <CardContainer isThemeLight={isThemeLight}>
            <WrapperLink to={`/countries/${country.alpha3Code}`}>
            <ImageContainer >
                {isLoading
                ? <Spinner/>
                : <CountryImage src={country.flag} alt={country.name + ' flag' } />}
            </ImageContainer>
            <CountryDetailsContainer >
                <CountryHeading>{country.name}</CountryHeading>
                <CountryDetail>Population: <span>{country.population.toLocaleString()} abitants</span></CountryDetail>
                <CountryDetail>Region: <span>{country.region}</span></CountryDetail>
                <CountryDetail>Capital: <span>{country.capital}</span></CountryDetail>
            </CountryDetailsContainer>
            </WrapperLink>
        </CardContainer>
    )
}



const mapStateToProps = createStructuredSelector({
    isThemeLight: themeSelector
})


export default connect(mapStateToProps)(CountryCard)