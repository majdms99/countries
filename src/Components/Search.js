import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AllStateConext } from '../Context/AllStatue';
import { BsSearch } from "react-icons/bs";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const Search = () => {
    const { dark, search, setSearch } = useContext(AllStateConext);

    const handelSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='input'>
            <input
                className={dark ? 'input-search input-dark' : 'input-search input-light'}
                type="text"
                placeholder='Search for a country...'
                onChange={handelSearch}
            />

            {search.length > 0
                ? <span> <Link to={`/search/${(search)}`} ><BsSearch color={dark ? '#fafafa' : '#2b3945'} /></Link></span>
                : <span> <a  ><BsSearch color={dark ? '#fafafa' : '#2b3945'} /></a></span>
            }

        </div>
    )
}

export default Search