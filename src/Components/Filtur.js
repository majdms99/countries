import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AllStateConext } from '../Context/AllStatue';

function Filtur() {
    const { dark, filter, setFilter } = useContext(AllStateConext);
    const redurect = useHistory();

    const handelFilter = (e) => {
        setFilter(e.target.value)
    }
    useEffect(() => {
        if (filter.length > 0) {

            redurect.push(`/region/${filter}`)
        }
    }, [filter])

    return (
        <div className='filter'>
            <select
                className={dark ? 'input-filter input-dark' : 'input-filter input-light'}
                onChange={handelFilter}
            >
                <option>Chose </option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>

            </select>
        </div>
    )
}

export default Filtur