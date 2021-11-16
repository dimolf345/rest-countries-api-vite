import {FaMoon, FaRegMoon} from 'react-icons/fa'
import { ThemeButtonContainer } from  './theme-button.styles'

const ThemeButton = ({isThemeLight, handleClick}) => {
    return (
        <>
            {isThemeLight
            ? <LightButton handleClick={handleClick}/>
            : <DarkButton handleClick={handleClick}/>    
            }
        </>
    )
}


const LightButton = ({handleClick}) => (
    <ThemeButtonContainer 
    onClick={handleClick} 
    isThemeLight={true}>
        <FaRegMoon className='fa-moons'/>
       <span>Dark Mode</span>
    </ThemeButtonContainer>
)

const DarkButton = ({handleClick}) => (
    <ThemeButtonContainer

    onClick={handleClick}
    isThemeLight={false}>
        <FaMoon className='fa-moons'/>
        <span>Light Mode</span>
    </ThemeButtonContainer>
)

export default ThemeButton

