import './header.styles.scss';
// import fontawesome icons for button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
// import theme selector in order to retrieve the state 
import {themeSelector} from '../../redux/theme/theme.selector'
// import the action in order to dispatch it in mapDispatchToProps
import { changeTheme } from '../../redux/theme/theme.actions';
 


const Header = ({isThemeLight, changeTheme}) => (
    <div className="header">
    <h1 className="heading">Where in the world?</h1>
    <button onClick={changeTheme}>
        <FontAwesomeIcon icon={faMoon} size="lg" className="light-icon"/>
        {isThemeLight? 'Dark Mode' : 'Light Mode'}
    </button>
    </div>
)


const mapStateToProps = createStructuredSelector({
    isThemeLight: themeSelector
})


const mapDispatchToProps = dispatch => ({
    changeTheme: ()=> dispatch(changeTheme())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)