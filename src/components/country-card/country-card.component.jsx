import React, {useState, useEffect} from "react"
import { ReactSVG } from "react-svg"
const CountryCard = ({country}) => 
{   let [isLoading, setIsLoading] = useState(true)
    let [flagImage, setFlagImage] = useState(null)

    
    return (
        <div className="test">
            <ReactSVG
                src={country.flag}
                loading = {()=> <span>Image loading</span>       }
                
            />
            <h1>CountrCard Component</h1>

        </div>
    )
}




export default CountryCard