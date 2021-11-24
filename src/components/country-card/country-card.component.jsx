import { CardContainer, ImageContainer, CountryImage, WrapperLink, CountryDetailsContainer, CountryHeading, CountryDetail } from "./country-card.styles"
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect"
import { themeSelector } from "../../redux/theme/theme.selector"


const CountryCard = ({country, isThemeLight}) => {
    return (
        <CardContainer isThemeLight={isThemeLight}>
            <WrapperLink to={`/countries/${country.alpha3Code}`}>
            <ImageContainer flag={country.flag} >
                <CountryImage
                    src={country.flag} alt={country.name + ' flag' } />
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