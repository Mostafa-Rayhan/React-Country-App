import React from 'react';

import { v4 as uuidv4 } from "uuid";
import Country from './Country';

const Countries = (props) => {
  return (
    <section>
        {props.Countries.map((country) => {
            const contryNew = { country, id: uuidv4() };

            return <Country { ... contryNew} key={contryNew.id} />;
        })}
    </section>
  );
};

export default Countries;