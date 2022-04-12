import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AllStateConext } from '../Context/AllStatue';
import { BsArrowLeft } from "react-icons/bs";
import PropagateLoader from 'react-spinners/PropagateLoader'

function SearchPage() {


    // Import states from Context/AllStatues
    const { searchCountry, dark, setSearch, featchSearchCountry, loading } = useContext(AllStateConext);


    let { value } = useParams();
    setSearch(value);

    useEffect(() => {
        featchSearchCountry();
        setSearch('')
    }, [])
    console.log(searchCountry)

    return (
        <div className='cards'>
            {
                loading ? <div className='loading'><PropagateLoader loading={loading} size={30} color={dark ? '#fafafa' : '#2b3945'} /></div>

                    :

                    <div className='container'>
                        <div className='link'>
                            <Link to="/" className={dark ? 'back-dark back' : 'back-light back'}><BsArrowLeft size={18} />Back</Link>
                        </div>
                        {
                            searchCountry.status === 404 ?
                                <h3 className='not-found'>Not found result </h3>
                                :
                                <div className='card-container'>

                                    {
                                        searchCountry.map(item => {
                                            return (
                                                <div className={dark ? 'card card-dark' : 'card card-light'} key={item.cca3}>
                                                    <Link
                                                        className={dark ? 'a-dark' : 'a-light'}
                                                        to={`/country/${(item.cca3)}`}
                                                    >
                                                        <div className='card-image'>
                                                            <img src={item.flags.svg} alt={item.name.common} />
                                                        </div>
                                                        <div className='card-box'>
                                                            <h4 className='country-name'>{item.name.common}</h4>
                                                            <p><span>Population: </span>{item.population}</p>
                                                            <p><span>Region: </span>{item.region}</p>
                                                            <p><span>Capital: </span>{item.capital}</p>
                                                            {/* <p><span>Languages: </span>{item.languages[0]}</p> */}
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                        }

                    </div>
            }
        </div >
    )
}

export default SearchPage