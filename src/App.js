import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
//import Cotizacion from "./components/Cotizacion";
import axios from "axios";
//import Moment from 'react-moment';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  const [moneda, guardarMoneda] = useState("");
  const [fecha, guadarFecha] = useState("");
  
 // const [resultado, guardarResultado] = useState('');
 //const [bandera, guardarBandera] = useState('');


  return (
    <Contenedor>
      <Header titulo="Histórico de Cotizaciones" />

      <Formulario guardarMoneda={guardarMoneda} 
      guadarFecha={guadarFecha}  
      
      />
    </Contenedor>
    
  );
}

export default App;

//"https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=" +
//moneda;
