import ThemeButton from "../button/button.component";
import {Link} from 'react-router-dom'
import { BorderListContainer } from "./border-list.styles";

const BorderList = ({countries, bordersArray}) => <BorderListContainer>
    <p>Borders: </p>
    {countries.map((country)=> {
        if(bordersArray.includes(country.alpha3Code)) {
            return <li key={country.alpha2Code}>
                <ThemeButton>
                    <Link to={`/countries/${country.alpha3Code}`}>
                        {country.name}
                    </Link>
                </ThemeButton>
            </li>
        }
    })}
</BorderListContainer>


export default BorderList