// Utilizo axios para hacer los requests a la API
import axios from 'axios';

const link = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let linkModificable = link;
    //Con esto se puede buscar información de paises específicos
    if (country) {
        linkModificable = `${link}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(linkModificable);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        return error;
    }
};

// Por default se muestra la información diaria global
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${link}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
};

// Mapeamos la lista de paises
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${link}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
};