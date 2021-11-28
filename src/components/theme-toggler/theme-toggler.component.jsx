import {FaMoon, FaRegMoon} from 'react-icons/fa'
import { TogglerContainer } from  './theme-toggler.styles'

const ThemeToggler = ({isThemeLight, handleClick}) => {
    return (
        <>
            {isThemeLight
            ? <LightToggler handleClick={handleClick}/>
            : <DarkToggler handleClick={handleClick}/>    
            }
        </>
    )
}


const LightToggler = ({handleClick}) => (
    <TogglerContainer 
    onClick={handleClick} 
    isThemeLight={true}>
        <FaRegMoon className='fa-moons'/>
       <span>Dark Mode</span>
    </TogglerContainer>
)

const DarkToggler = ({handleClick}) => (
    <TogglerContainer

    onClick={handleClick}
    isThemeLight={false}>
        <FaMoon className='fa-moons'/>
        <span>Light Mode</span>
    </TogglerContainer>
)

export default ThemeToggler

