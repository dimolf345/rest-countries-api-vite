import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setRegionFilter } from '../../redux/filters/filters.action';
import { selectRegionFilter } from '../../redux/filters/filters.selector';
import { themeSelector } from '../../redux/theme/theme.selector';
import { DropdownWrapper } from './dropdown.styles';
import Dropdown from 'react-dropdown'




const options = [,
  {value: '', label: 'All regions'},
  {value:'Africa', label: 'Africa'},
  {value:'Americas', label: 'America'},
  {value:'Asia', label: 'Asia'},
  {value:'Europe', label: 'Europe'},
  {value:'Oceania', label: 'Oceania'}
];

const defaultOption = options[0]

function RegionDropdown({region, isThemeLight, handleChange}) {

  return (
    <DropdownWrapper isThemeLight={isThemeLight}>
        <Dropdown 
            placeholder="Filter By Region"
            options={options}
            onChange={(selected)=> handleChange(selected.value)} />
    </DropdownWrapper>
  );
}


const mapStateToProps = createStructuredSelector({
    region: selectRegionFilter,
    isThemeLight: themeSelector
})

const mapDispatchToProps = dispatch => ({
    handleChange: region => dispatch(setRegionFilter(region))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegionDropdown)
