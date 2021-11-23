import React from 'react';
import Header from '../header/header.component'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../../pages/homepage/homepage.component'
import CountryPage from '../../pages/countrypage/countrypage.component'
import NotFound from '../../pages/not-found/not-found.component';
import ErrorPage from '../../pages/errorpage/errorpage.component';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {themeSelector} from '../../redux/theme/theme.selector'
import { BackgroundWrapper } from './app.styles';



class App extends React.Component {
  
  render() {
    const {isThemeLight} = this.props
  return (
    <BackgroundWrapper isThemeLight={isThemeLight}>
      <Header/>
      <Routes>

        <Route path="/error" element={<ErrorPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/countries/:countryId" element={<CountryPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BackgroundWrapper>
   )
  }
}

const mapStateToProps = createStructuredSelector({
  isThemeLight: themeSelector,
})



export default connect(mapStateToProps)(App)
