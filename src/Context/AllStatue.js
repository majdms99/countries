import React, { createContext, useState, useEffect } from 'react';

export const AllStateConext = createContext();

export const AllStateProvider = (props) => {


    /*All States*/
    const [dark, setDark] = useState(false);
    const [countrys, setCountrys] = useState([]);
    const [searchCountry, setSearchCountry] = useState([]);
    const [filterCountry, setFilterCountry] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    /*Get all Countrys*/
    const featchData = () => {
        setLoading(true)
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(result => {
                setCountrys(result)
                setLoading(false)
            })
    }


    /*Search by country name.*/
    const featchSearchCountry = () => {
        setLoading(true)
        if (search.length > 0) {
            fetch(`https://restcountries.com/v3.1/name/${search}`)
                .then(res => res.json())
                .then(result => {
                    setSearchCountry(result);
                    setLoading(false);
                })

        }
    }
    // Search by Region: Africa, Americas, Asia, Europe, Oceania.The search can be using the full region’s name or just part of it  
    const featchFilterCountry = () => {
        setLoading(true)

        fetch(`https://restcountries.com/v3.1/region/${filter}`)
            .then(res => res.json())
            .then(result => {
                setFilterCountry(result);
                setLoading(false);
            })


    }

    useEffect(() => {
        featchData();
    }, [])


    // console.log(`filter ${filter}`);
    // console.log(filterCountry);
    // console.log(searchCountry);
    return (
        <AllStateConext.Provider value={{ dark, setDark, countrys, searchCountry, search, setSearch, featchSearchCountry, featchData, loading, setLoading, filter, setFilter, featchFilterCountry, filterCountry }}>
            {props.children}
        </AllStateConext.Provider>
    )

}