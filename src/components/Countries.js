import React from 'react';

import { v4 as uuidv4 } from "uuid";
import Country from './Country';
import style from "./countries.module.css";

const Countries = (props) => {
  console.log(props.countries)
  return (
    // <section className={style.Countries}>
      //  <div className="row">
      <div  className="row g-5 container">

{props.countries.map((country) => {
            const countryNew = { country, id: uuidv4() };

            return ( 
              <Country 
                {...countryNew} 
                key={countryNew.id}
                onRemoveCountry={props.onRemoveCountry}
              />
            );
        })}

      </div>
       
      //  </div>
    // </section>
  );
};

export default Countries;