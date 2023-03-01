import React, { useState } from 'react'
import '../App.css'
import Countries from './Countries';
const Form = () => {

    const [country, setCountry] = useState('');
    const [searchCountry, setSearchCountry] = useState('')
    const [searchSubmitted, setSearchSubmitted] = useState(false)


    const handleOnSubmit = (e) => {
        setSearchCountry(country)
        setCountry('')
        e.preventDefault();
        setSearchSubmitted(true);
    }

    const handleOnChange = (e) => {
        let ip = e.target.value;
        setCountry(ip.charAt(0).toUpperCase() + ip.slice(1))
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder='Search by country name' value={country} onChange={handleOnChange} autoFocus required />
                <input type="submit" value="Search" />
            </form>

            <Countries countryName={searchCountry} searchSubmitted={searchSubmitted} />
        </>
    )
}

export default Form