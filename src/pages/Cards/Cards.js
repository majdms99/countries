import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AllStateConext } from '../../Context/AllStatue';
import './Cards.css'
import Search from '../../Components/Search';
import PropagateLoader from 'react-spinners/PropagateLoader'
import Filtur from '../../Components/Filtur';



const Cards = () => {

    // Import states from Context/AllStatues
    const { countrys, dark, loading, setSearch } = useContext(AllStateConext);

    useEffect(() => {
        setSearch('');
    }, [])


    return (
        <div className='cards'>
            {
                loading ? <div className='loading'><PropagateLoader loading={loading} size={30} color={dark ? '#fafafa' : '#2b3945'} /></div>
                    :
                    <div className='container'>
                        <div className='header-component'>
                            <Search /><Filtur />
                        </div>
                        <div className='card-container'>

                            {
                                countrys.map(item => {
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
        </div>
    )
}

export default Cards