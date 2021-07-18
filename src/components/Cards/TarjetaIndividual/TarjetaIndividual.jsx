import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './TarjetaIndividual.module.css';

// El objetivo de esto es hacer el formato para una tarjeta individual y reutilizarlo en el componente de las tarjetas
const CardComponent = ({ className, cardTitle, value, lastUpdate, subtitulo }) => (
  <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant="h5" component="h2">
        {/* Utilizando CountUp de react-countup puedo hacer una animación para los números */}
        <CountUp start={0} end={value} duration={2} separator="." />
      </Typography>
      <Typography color="textSecondary">
        {/* Le doy el formato a la fecha */}
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography variant="body2" component="p">
        {/* Paso el subtítulo de la tarjeta como prop*/}
        {subtitulo}
      </Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;