import React from 'react';
import Header from '../header/header.component'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../../pages/homepage/homepage.component'
import CountryPage from '../../pages/countrypage/countrypage.component'
import NotFound from '../../pages/not-found/not-found.component';
import {connect} from 'react-redux'
import {countriesFetchStartAsync} from '../../redux/countries/countries.action';
import {createStructuredSelector} from 'reselect'
import {themeSelector} from '../../redux/theme/theme.selector'
import { BackgroundWrapper } from './app.styles';



class App extends React.Component {
  componentDidMount() {

  }

  
  render() {
    const {isThemeLight} = this.props
  return (
    <BackgroundWrapper isThemeLight={isThemeLight}>
      <Header/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/countries/" element={<CountryPage/>}/>
      </Routes>
    </BackgroundWrapper>
   )
  }
}

const mapStateToProps = createStructuredSelector({
  isThemeLight: themeSelector
})


const mapDispatchToProps = dispatch => ({
  countriesFetchStartAsync: ()=> dispatch(countriesFetchStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
