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
  background-color: #e0832c;
  border: none;
  width: 70%;
  height:55px;
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
  const [buscarCoti, guardarbuscarCoti] = useState(false);
  
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
      console.log('+++++++++++');
console.log(buscarCoti);
console.log('+++++++++++');
      if(moneda === '' || fecha === null || buscarCoti === false ){
        const url = `https://api.exchangeratesapi.io/latest?base=USD`;
        const resultado = await axios.get(url);
        guardarListado(resultado.data.rates);
        guardarbuscarCoti(false);
        //console.log('cambiar estado');
      //console.log(buscarCoti);  

      }else{
        console.log('el segundo llamado')
        
        const url = `https://api.exchangeratesapi.io/${fecha.toISOString().slice(0,10)}?base=${moneda}`;
        const resultado = await axios.get(url);
        guardarListado(resultado.data.rates);
        
      }// si el resultado llega vacio no va a ejecutar nada
        //guardarbuscarCoti(false);
        //console.log('cambiar estado');
      //console.log(buscarCoti);      
      }
    
    consultarApi();
  }, [moneda, fecha]);

  // cuando el ususario hace submit
  const buscarCotizar = (e) => {
    e.preventDefault();
    guardarbuscarCoti(true);
    // validar ambos campos que esten llenos
    if (moneda === "" || fecha === null) {
      guardarError(true);
      return; // para que no se ejecute el codigo
    }
   
    // pasar los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guadarFecha(fecha);
    
    console.log('------------');
    console.log(buscarCoti);
    console.log('---------');
  };

  const masCotizaciones = (e) => {
    e.preventDefault();
    guardarBusqueMas(true);
    //console.log("hicel click");
     

    // pasar los datos de la api
  };
  return (
    <Fragment>
      <form>
        {error ? <Error mensaje="Debe llenar todos los campos" /> : null}
        <SelectMonedas />
        <SelectFecha />
        <Boton onClick={buscarCotizar} type="submit" value="Buscar cotizaciones" />
        <SelectApi /> 
        </form>
      
      
      

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