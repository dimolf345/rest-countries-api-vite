import {GoSearch} from 'react-icons/go'
import { FormWrapper, SearchInput, InputWrapper } from './filters-form.styles';
import CustomDropdown from '../dropdown/dropdown.component.jsx';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectSearch } from '../../redux/filters/filters.selector';
import { themeSelector } from '../../redux/theme/theme.selector';
import { searchCountry } from '../../redux/filters/filters.action';

const FiltersForm = ({isThemeLight, handleInputChange, inputSearch}) => {
    return (
        <FormWrapper>
            <InputWrapper isThemeLight={isThemeLight}>
            <GoSearch className="search-icon" size={'1.8em'}/>
            <SearchInput 
                placeholder="Search for a country..."
                className="search-input"
                name="searchInput"
                type="search" 
                value={inputSearch}
                onChange={(e)=> handleInputChange(e.target.value)}/>
            </InputWrapper>
            <CustomDropdown/>
        </FormWrapper>
    )
}

const mapStateToProps = createStructuredSelector({
    inputSearch: selectSearch,
    isThemeLight: themeSelector
})

const mapDispatchToProps = dispatch => ({
    handleInputChange : (search) => dispatch(searchCountry(search))
}) 


export default connect(mapStateToProps,mapDispatchToProps)(FiltersForm)