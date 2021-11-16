import './header.styles.scss';
// import fontawesome icons for button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import { ButtonContainer, HeaderContainer, HeadingContainer } from './header.styles';


import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
// import theme selector in order to retrieve the state 
import {themeSelector} from '../../redux/theme/theme.selector'
// import the action in order to dispatch it in mapDispatchToProps
import { changeTheme } from '../../redux/theme/theme.actions';
 


const Header = ({isThemeLight, changeTheme}) => {
    console.log(isThemeLight)
    return(
    <HeaderContainer isThemeLight={isThemeLight}>
    <HeadingContainer isThemeLight={isThemeLight}>
        Where in the world?
    </HeadingContainer>
    <ButtonContainer isThemeLight={isThemeLight} onClick={changeTheme}>
        <FontAwesomeIcon icon={faMoon} size="lg" className="light-icon"/>
        {isThemeLight? 'Dark Mode' : 'Light Mode'}
    </ButtonContainer>
    </HeaderContainer>
)}


const mapStateToProps = createStructuredSelector({
    isThemeLight: themeSelector
})


const mapDispatchToProps = dispatch => ({
    changeTheme: ()=> dispatch(changeTheme())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)