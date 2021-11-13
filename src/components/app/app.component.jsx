import React from 'react';
import Header from '../header/header.component';
import './app.styles.scss'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../../pages/homepage/homepage.component'
import CountryPage from '../../pages/countrypage/countrypage.component'
import NotFound from '../../pages/not-found/not-found.component';
import {connect} from 'react-redux'
import {countriesFetchStartAsync} from '../../redux/countries/countries.action';
import {createStructuredSelector} from 'reselect'


class App extends React.Component {
  componentDidMount() {
    const {countriesFetchStartAsync} = this.props;
    countriesFetchStartAsync();

  }

  
  render() {
  return (
    <div className="app light">
      <Header isThemeLight/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/countries/" element={<CountryPage/>}/>
      </Routes>
    </div>
   )
  }
}

const mapDispatchToProps = dispatch => ({
  countriesFetchStartAsync: ()=> dispatch(countriesFetchStartAsync())
})


export default connect(null, mapDispatchToProps)(App)
