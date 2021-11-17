import React from "react"
import { Link, Navigate } from "react-router-dom"
import {connect} from 'react-redux'
import {SetErrorMessage} from '../../redux/errortest/errortest.action'

class HomePage extends React.Component {
    state= {
        errorMessage: ''
    }

    render() {
        const {error, setErrorMessage} = this.props
        console.log(error)
        return(
            <div className="homepage">
                <h1>HomePage</h1>
                {error && <Navigate to="/error"/> }
                <button
                    onClick={()=> setErrorMessage('porco dio')}
                >
                    Set Error Message
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.test.error
})

const mapDispatchToProps = dispatch => ({
    setErrorMessage: (message)=> dispatch(SetErrorMessage(message))
})


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)