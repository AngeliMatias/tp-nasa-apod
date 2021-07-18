import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ cambioDePais }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    // Formulario para seleccionar el país del que se desea saber la información
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => cambioDePais(e.target.value)}>
        {/* Se puede seleccionar el valor Global y al estar vacío vuelve al line chart */}
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;