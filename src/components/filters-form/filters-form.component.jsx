import './filters-form.styles.scss'

const FiltersForm = ({handleChange, searchInput}) => {
    return (
        <div className="filters-form">
            <input 
                name="searchInput"
                type="search" value={searchInput} onChange={handleChange}/>
            <select onChange={handleChange} name="regionFilter" id="">
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
         </select>
        </div>
    )
}


export default FiltersForm