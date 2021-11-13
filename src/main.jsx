import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/app.component.jsx'
// import the provider from react redux and pass the store as a props to
// initialize React-redux
import {Provider} from 'react-redux';
import store from './redux/store'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
