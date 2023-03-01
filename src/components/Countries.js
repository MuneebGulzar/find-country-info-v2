import React, { useState, useEffect } from 'react';
import Country from './Country';
import axios from 'axios';
import Swal from 'sweetalert2';


const Countries = (props) => {


    const [countries, setCountries] = useState([]);
    // const [country, setCountry] = useState('')
    const [id, setId] = useState(0)
    useEffect(() => {

        if (props.searchSubmitted) {
            let api = `https://restcountries.com/v2/name/${props.countryName}`;

            axios.get(api).then(res => {

                if (res.data.length > 1) {

                    // Filtramos el país por nombre
                    let country = res.data.filter(c => c.name === `${props.countryName}`);

                    // recuperamos arrays de idiomas
                    let langs = country[0].languages.map(l => {
                        return (
                            l.name
                        )
                    }).toString();

                    // Recueramos la divisas por si hay varios
                    let currency = country[0].currencies.map(c => {
                        return (
                            c.name
                        )
                    }).toString();

                    let obj = {
                        id: id + 1,
                        flag: country[0].flag,
                        name: country[0].name,
                        region: country[0].region,
                        capital: country[0].capital,
                        population: country[0].population,
                        languages: langs,
                        currency: currency
                    }

                    setCountries((countries) => [...countries, obj])
                    setId(id + 1)

                    console.log(countries)

                } else {
                    let country = res.data[0];

                    let langs = country.languages.map(l => {
                        return (
                            l.name
                        )
                    }).toString();

                    let currency = country.currencies.map(c => {
                        return (
                            c.name
                        )
                    }).toString();

                    let obj = {
                        id: id + 1,
                        flag: country.flags.svg,
                        name: country.name,
                        region: country.region,
                        capital: country.capital,
                        population: country.population,
                        languages: langs,
                        currency: currency
                    }

                    setCountries((countries) => [...countries, obj])
                    setId(id + 1)
                    console.log(countries)
                }
            })
                .catch(error => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Not found!',
                        icon: 'error',
                        confirmButtonText: 'Search again'
                    })
                    console.log("Errorrrr: " + error)
                })
        }


    }, [props.countryName, props.searchSubmitted])

    useEffect(() => {
        console.log("countrieeees ", countries)
    }, [countries, id])



    return (
        <>

            <Country countries={countries} cardID={id} />

        </>
    )
}

export default Countries