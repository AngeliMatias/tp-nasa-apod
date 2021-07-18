import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './TarjetaIndividual/TarjetaIndividual';
import styles from './Cards.module.css';
import Spinner from '../Spinners/SpinnerAPOD';

const Informacion = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  // Si data está como undefined, se muestra el spinner
  if (!confirmed) {
      return <Spinner/>;
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">Estadísticas al día de la fecha</Typography>
      {/* Haciendo uso del componente creado en TarjetaIndividual, armo una grilla con varias tarjetas para los distintos datos */}
      <Grid container spacing={3} justifyContent="center">
        <CardComponent
          className={styles.infectados}
          cardTitle="Infectados"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          subtitulo="Número de casos activos de Covid-19."
        />
        <CardComponent
          className={styles.recuperados}
          cardTitle="Recuperados"
          value={recovered.value}
          lastUpdate={lastUpdate}
          subtitulo="Número de recuperados de Covid-19."
        />
        <CardComponent
          className={styles.fallecidos}
          cardTitle="Fallecidos"
          value={deaths.value}
          lastUpdate={lastUpdate}
          subtitulo="Número de fallecidos por Covid-19."
        />
      </Grid>
    </div>
  );
};

export default Informacion;