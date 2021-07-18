import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import logo from './assets/logo.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  // Le pido la info a la api y reviso por consola que esté todo bien
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({ data });
  }

  cambioDePais = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={logo} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker cambioDePais={this.cambioDePais} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;