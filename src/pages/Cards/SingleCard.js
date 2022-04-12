import React, { useContext } from 'react'
import { AllStateConext } from '../../Context/AllStatue';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

const SingleCard = () => {
    const { countrys, dark } = useContext(AllStateConext);

    let { name } = useParams();
    console.log(name);
    // console.log(countrys.name.common)

    let dataShow = countrys.find(item =>
        (item.cca3) === name
    )

    return (
        <>

            <div className={dark ? 'single-card-dark ' : 'single-card-light'} key={dataShow.name.common}>
                <div className='container'>
                    <div className='link'>
                        <Link to="/" className={dark ? 'back-dark back' : 'back-light back'}><BsArrowLeft size={18} />Back</Link>
                    </div>
                    <div className='card-single-container'>
                        <div className='left'>
                            <img src={dataShow.flags.svg} alt={dataShow.name.common} />
                        </div>
                        <div className='right'>
                            <ul className='list-info'>
                                <h4 className='country-name-'>{dataShow.name.common}</h4>
                                <p><span className="span-bold">Population: </span>{dataShow.population}</p>
                                <li><span className="span-bold">Region: </span>{dataShow.region}</li>
                                <li><span className="span-bold">Sub Region: </span>{dataShow.subregion}</li>
                                <li><span className="span-bold">Capital: </span>{dataShow.capital}</li>
                            </ul>
                            <ul className='list-info'>
                                <li><span className="span-bold">Top level Domin: </span>{dataShow.tld}</li>
                                <li><span className="span-bold">currencies: </span>{Object.keys(dataShow.currencies).map((cur) => { return (<span>{cur}, </span>) })}</li>
                                <li><span className="span-bold">Languages: </span>{Object.values(dataShow.languages).map((language) => { return (<span>{language}, </span>) })}</li>
                            </ul>
                            <span className='list-links'><span className="span-bold">Border Countries: </span>{(dataShow.borders).map((border) => { return (<Link className={dark ? 'back-dark back' : 'back-light back'} to={`/country/${border}`}>{border}</Link>) })}</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingleCard