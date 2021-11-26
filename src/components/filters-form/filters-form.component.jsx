import './filters-form.styles.scss'
import {GoSearch} from 'react-icons/go'
import { FormWrapper, SearchInput } from './filters-form.styles';
import CustomDropdown from '../dropdown/dropdown.jsx';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectSearch } from '../../redux/filters/filters.selector';
import { searchCountry } from '../../redux/filters/filters.action';

const FiltersForm = ({inputSearch, handleInputChange}) => {
    return (
        <FormWrapper>
            <div className="input-wrapper">
            <GoSearch className="search-icon" size={'1.8em'}/>
            <SearchInput 
                placeholder="Search for a country..."
                className="search-input"
                name="searchInput"
                type="search" 
                onChange={(e)=> handleInputChange(e.target.value)}/>
            </div>
            <CustomDropdown/>
        </FormWrapper>
    )
}

const mapStateToProps = createStructuredSelector({
    inputSearch: selectSearch,
})

const mapDispatchToProps = dispatch => ({
    handleInputChange : (search) => dispatch(searchCountry(search))
}) 


export default connect(mapStateToProps,mapDispatchToProps)(FiltersForm)