import React from "react";
import styled from "@emotion/styled";

const Div = styled.div`

background-color: #c8d1da;
padding:10px;
margin-top: 2rem;

`;

const Parrafo = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = (resultado) => {
  //console.log(resultado);
  if (resultado.resultadoo === ''){
      return null;
  }// si el resultado llega vacio no va a ejecutar nada
    

  //console.log(Object.keys(resultado).length === 0)

  const currency = resultado.monedaa + "";
  const result = resultado.resultadoo + "";

 // console.log(result);
  //console.log(currency);

  return (
    <Div>
      <Parrafo>
        
        La cotizacion de la moneda
        <span> {currency}</span>
      </Parrafo>
      
      <span> </span>
      <Parrafo>
        Tiene un valor de <span> {result}</span>
      </Parrafo>
    </Div>
  );
};

export default Cotizacion;
