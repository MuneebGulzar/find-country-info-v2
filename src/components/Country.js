import React from 'react'
import Countries from './Country'
import '../App.css'

import { IoHome } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';
import { FaHeadSideCough } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';

const Country = (props) => {
    return (
        <>
            <div className="card-container">
                {
                    props.countries.map(c => {
                        return (
                            <div className="card" key={c.id}>
                                <div className="img-containter">
                                    <img src={c.flag} alt={c.flag + ' flag'} />
                                </div>
                                <div className="content">
                                    <div className="desc">
                                        <h1>{c.name}</h1>
                                        <h3>{c.region}</h3>
                                    </div>
                                    <div className="stats">
                                        <p><IoHome size={28} /> {c.capital}</p>
                                        <p><IoIosPeople size={28} /> {c.population > 1000000 ? (Math.round(c.population) / 1000000).toFixed(2) + 'M' : c.population} people</p>
                                        <p><FaHeadSideCough size={28} /> {c.languages}</p>
                                        <p><AiFillDollarCircle size={28} /> {c.currency}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Country