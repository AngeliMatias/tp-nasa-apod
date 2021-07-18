![Logo](/src/assets/logo.png)
# Seguimiento de Covid-19 con React y Material UI
Esta app fue desarrollada utilizando *create-react-app*, *material-UI*, *react-chartjs2* y *react-countup*, utilizando la siguiente [API](https://covid19.mathdro.id/api)

-----------------------

## **Para qué se utilizó cada cosa?**

### **create-react-app**:

Se utilizo para el setup inicial de la aplicación.

### **material-UI**:

Se utilizó para el diseño del estilo CSS. 

### **react-chartjs2**:
Se utilizó para graficar las estadísticas.

### **react-countup**:
Se utilizó para la animación de los distintos valores de las tarjetas.

-----------------------

## Cual es la función de la app?
Inicialmente la aplicación permite ver las estadísticas globales de infectados, recuperados y fallecidos hasta el día actual. Luego hay  un form en el que se puede elegir un pais y ver sus estadísticas, tanto en formato de tarjetas como en un gráfico de barras. 

En las estadísticas globales se pueden seleccionar y deseleccionar las opciones de infectados y fallecidos para ver solo una u otra data.

-----------------------

## Qué necesito hacer para correr la app?

Para correr la app se necesita clonar el repositorio haciendo:
### `> git clone https://github.com/AngeliMatias/covid-tracker` 

Luego instalar las dependencias mediante:
### `> npm i`

Y finalmente correr el proyecto con:
### `> npm start`