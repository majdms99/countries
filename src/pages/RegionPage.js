import React, { useContext, useEffect } from 'react'
import { AllStateConext } from '../Context/AllStatue';
import { BsArrowLeft } from "react-icons/bs";
import PropagateLoader from 'react-spinners/PropagateLoader'
import { Link } from 'react-router-dom';

const RegionPage = () => {

    // Import states from Context/AllStatues
    const { dark, featchFilterCountry, setFilter, loading, filterCountry } = useContext(AllStateConext);

    // Upload countrys
    useEffect(() => {
        featchFilterCountry();
        setFilter('')
    }, [])
    // console.log(filterCountry);

    return (
        <div className='cards'>
            {
                loading ? <div className='loading'><PropagateLoader loading={loading} size={30} color={dark ? '#fafafa' : '#2b3945'} /></div>

                    :

                    <div className='container'>
                        <div className='link'>
                            <Link to="/" className={dark ? 'back-dark back' : 'back-light back'}><BsArrowLeft size={18} />Back</Link>
                        </div>

                        <div className='card-container'>

                            {
                                filterCountry.map(item => {
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
                    </div>
            }
        </div >
    )
}

export default RegionPage