import React from "react";
import styled from "@emotion/styled";

const Div = styled.div``;

const Parrafo = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = (resultado) => {
  console.log(resultado.resultadoo);
  if (resultado.resultadoo === ''){
      return null;
  }// si el resultado llega vacio no va a ejecutar nada
    

  //console.log(Object.keys(resultado).length === 0)

  const currency = resultado.monedaa + "";
  const result = resultado.resultadoo + "";

  return (
    <div>
      <Parrafo>
        
        La cotizacion de la moneda
        <span> {currency}</span>
      </Parrafo>
      <span> </span>
      <Parrafo>
        Tiene un valor de <span> {result}</span>
      </Parrafo>
    </div>
  );
};

export default Cotizacion;
