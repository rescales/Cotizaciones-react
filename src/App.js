import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import axios from "axios";
//import Moment from 'react-moment';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  const [moneda, guardarMoneda] = useState("");
  const [fecha, guadarFecha] = useState("");
  
  const [resultado, guardarResultado] = useState('');
 //const [bandera, guardarBandera] = useState('');
  
 // <Moment format="YYYY/MM/DD">
 
  
//</Moment>

  useEffect(() => {
    const cotizarMoneda = async () => {
      if (moneda === "" && fecha === "") return; // evito la ejecucion la primera vez
      // consultar la api para obtener la cotizacion
      //const url = `https://api.exchangeratesapi.io/2018-01-01?base=${moneda}`;
      //const url = `https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-01-02&symbols=${moneda}`;
      const url = `https://api.exchangeratesapi.io/${fecha.toISOString().slice(0,10)}?base=${moneda}`;
      console.log(url);      
      const resultado = await axios.get(url);
        
    
     
      //console.log(resultado.data.rates[Object.getOwnPropertyNames(resultado.data.rates)[0]]);

      guardarResultado(resultado.data.rates[Object.getOwnPropertyNames(resultado.data.rates)[0]]);
      //console.log(bandera);
    };
    cotizarMoneda();
  }, [moneda, fecha]); // como dependecias la moneda y fecha para que cambien cuando el ususario le de submit



  return (
    <Contenedor>
      <Header titulo="Histórico de Cotizaciones" />

      <Formulario guardarMoneda={guardarMoneda} 
      guadarFecha={guadarFecha}  
      
      />
      <Cotizacion resultadoo={resultado} monedaa={moneda} />
    </Contenedor>
    
  );
}

export default App;

//"https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=" +
//moneda;
