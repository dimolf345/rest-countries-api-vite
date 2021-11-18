import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import { countriesFetchFailure } from "../../redux/countries/countries.action"
import { createStructuredSelector } from "reselect"
import { selectErrorMessage } from "../../redux/countries/countries.selector"

class ErrorPage extends React.Component {
    componentDidMount() {
        this.props.resetError();
    }

    render() {
        console.log('rendering error')
    const {resetError, errorMessage, test} = this.props
    return (
    <div className="errorpage">
        <h1>Ooops, there is an error: {errorMessage}</h1>
        <Link to="/">Try again</Link>
     </div>
    )
    }
}


const mapStateToProps = createStructuredSelector({
    errorMessage: selectErrorMessage
})



const mapDispatchToProps = dispatch => ({
    resetError: () => dispatch(countriesFetchFailure(''))
})


export default connect(mapStateToProps,mapDispatchToProps)(ErrorPage)