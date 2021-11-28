import {connect} from 'react-redux'
import { themeSelector } from '../../redux/theme/theme.selector'
import { createStructuredSelector } from 'reselect'
import { ThemeButton } from './button.styles'

const Button = ({isThemeLight, children, handleClick}) => 
        <ThemeButton 
            onClick={handleClick}
            isThemeLight={isThemeLight}>
            {children}
        </ThemeButton>




const mapStateToProps = createStructuredSelector({
    isThemeLight : themeSelector
})

export default connect(mapStateToProps)(Button)