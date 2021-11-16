import {HeaderContainer, HeadingContainer } from './header.styles';
import ThemeButton from '../theme-button/theme-button';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
// import theme selector in order to retrieve the state 
import {themeSelector} from '../../redux/theme/theme.selector'
// import the action in order to dispatch it in mapDispatchToProps
import { changeTheme } from '../../redux/theme/theme.actions';

// TODO: ADD A LINK INSIDE THE HEADING IN ORDER TO RETURN TO THE HOMEPAGE
 


const Header = ({isThemeLight, changeTheme}) => {
    return(
    <HeaderContainer isThemeLight={isThemeLight}>
    <HeadingContainer isThemeLight={isThemeLight}>
        Where in the world?
    </HeadingContainer>
    <ThemeButton 
        handleClick={changeTheme}
        isThemeLight={isThemeLight} />
    </HeaderContainer>
)}


const mapStateToProps = createStructuredSelector({
    isThemeLight: themeSelector
})


const mapDispatchToProps = dispatch => ({
    changeTheme: ()=> dispatch(changeTheme())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)