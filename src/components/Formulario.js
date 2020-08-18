import React, { useEffect, useState, Fragment } from "react";
import styled from "@emotion/styled";

import useMoneda from "../hooks/useMoneda";
import useFecha from "../hooks/useFecha";
import useApi from "../hooks/useApi";
import useApiMasCoti from "../hooks/useApiMasCoti";
import axios from "axios";
import Error from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 20px;
  padding: 10px;
  background-color: #e28a37;
  border: none;
  width: 100%;
  border-radius: 30px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ guadarFecha, guardarMoneda }) => {
  // state del listado de la api
  const [listado, guardarListado] = useState({});
  const [busqueMas, guardarBusqueMas] = useState(false);
  // utilizar useMoneda
  // el state que va a retornar es segun la moneda que el usuario elija. lo estoy extrayendo en el orden en que se retornan
  // 'seleciioan una moneda.... se pasa como label en el hooks y el string vacio es lo que va a seleccionar y lo paso como state initial'
  const [moneda, SelectMonedas] = useMoneda(
    "Selecciona la moneda de referencia",
    "",
    listado
  ); // el state que va a retornar es segun la moneda que el usuario elija. lo estoy extrayendo en el orden en que se retornan

  //utilizar useFecha
  const [fecha, SelectFecha] = useFecha("Ingrese la fecha de cotización");

  // utilizar useApi
  const [api, SelectApi] = useApi(listado);
  const [api1, SelectMasCoti] = useApiMasCoti(listado);
  //const [vermas, guadarVerMas] = useState('');

  const [error, guardarError] = useState(false);

  // ejecutar llamado a la API
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://api.exchangeratesapi.io/latest?base=USD`;
      const resultado = await axios.get(url);

      //console.log(resultado);
      //console.log(resultado.data.base);
      //console.log(resultado.data.rates[Object.getOwnPropertyNames(resultado.data.rates)]);
      guardarListado(resultado.data.rates);
    };
    consultarApi();
  }, []);

  // cuando el ususario hace submit
  const buscarCotizar = (e) => {
    e.preventDefault();

    // validar ambos campos que esten llenos
    if (moneda === "" || fecha === "") {
      guardarError(true);
      return; // para que no se ejecute el codigo
    }

    // pasar los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guadarFecha(fecha);
  };

  const masCotizaciones = (e) => {
    e.preventDefault();
    guardarBusqueMas(true);
    console.log("hicel click");
     

    // pasar los datos de la api
  };
  return (
    <Fragment>
      <form onSubmit={buscarCotizar}>
        {error ? <Error mensaje="Debe llenar todos los campos" /> : null}
        <SelectMonedas />
        <SelectFecha />
        <Boton type="submit" value="Buscar cotizaciones" />
      </form>
      <SelectApi />

      <form onClick={masCotizaciones}>
        <button class="btn btn-outline-primary btn" type="submit">
          Ver mas cotizaciones
        </button>
        
      </form>
      {busqueMas ? <SelectMasCoti /> : null}
     
    </Fragment>
  );
};

export default Formulario;
//