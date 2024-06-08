import React, { useContext } from 'react'
import './SearchButton.scss'
import { Context } from '../../Context/UserContext'
import SearchIcon from "@mui/icons-material/Search";


function SearchButton({ search }) {

    const { quory, setQuory } = useContext(Context)

    return (
        <div className='sec'>
            <div className="search-section">
                <input placeholder="Search" onChange={(e) => setQuory(e.target.value)} />
                <div className="searchbtn" onClick={search}>
                    <SearchIcon />
                </div>
                {/* <div className="search-results">

            </div> */}
            </div>
        </div>
    )
}

export default SearchButton
