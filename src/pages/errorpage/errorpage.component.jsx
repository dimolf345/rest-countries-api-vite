import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { ResetError } from "../../redux/errortest/errortest.action"

const ErrorPage = ({resetError}) => 
    <div className="errorpage">
        <h1>ErrorPage</h1>
        <Link 
            onClick={()=> resetError()}
            to="/">Try again</Link>
    </div>


const mapDispatchToProps = dispatch => ({
    resetError: () => dispatch(ResetError())
})


export default connect(null,mapDispatchToProps)(ErrorPage)