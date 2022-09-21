import React from 'react';

import style from "./country.module.css";

import './Country.css'
const Country = (props) => {
    const { name, flags, capital, population, area } = props.country;

    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
    };

    const designShow = {
        width: '19rem'
    }
    
    return (
        // <article>
            <div className='col-lg-4'>
                <div className="card h-100 designs" style={designShow}>
                <img  src={flags.png} alt={name.common} className=""/>
                {/* </div> */}
                <div class="card-body body-designs finals">
                <h3>Name: {name.common}</h3>
                <h3>Population: {population}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Area: {area}</h3>
                <button className={style.btn} onClick={() => {
                    handleRemoveCountry(name.common)
                }}>Remove Country</button>
                                    
               
                
            </div>
            </div>
        </div>
    );
};

export default Country;