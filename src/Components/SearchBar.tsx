import React, {useState} from "react";

const SearchBar = ({onSearch, query}: {onSearch: (str: string) => void, query: string}) => {
    const [searchInput, setSearchInput] = useState(query)
    return (
        <div className="app-search">
        <input type="search" placeholder="Search for movie" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <button type="button" onClick={() => onSearch(searchInput)}>Search</button>
        </div>
    )
}

export default SearchBar