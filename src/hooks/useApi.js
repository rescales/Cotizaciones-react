import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
//import { v4 as uuidv4 } from "uuid";
import canada from '../img/canada.png';
import GBP from '../img/united-kingdom.png';
import eeuu from '../img/usd.png';
import eur from '../img/eur.png';


const useApi = (listado) => {
  //console.log(listado);
  // State de nuestro custom hook
  const [state, actualizarState] = useState();

  //const currency = listado + "";
  //const result = listado.resultadoo + "";

  //console.log(currency);

  const SelectApi = () => (
    // lo que esta en seleccionar es lo que s emuestra en pantalla
    <Fragment>
<table class="table">
        <thead></thead>
        <tbody>
              <tr>
                <td><img src={canada} width="20" height="20"/></td>
                <td>CAD</td>
                <td>{listado.CAD}</td>
              </tr>
              <tr>
                <td><img src={GBP} width="20" height="20"/></td>
                <td>GBP</td>
                <td>{listado.CAD}</td>
              </tr>
              <tr>
                <td><img src={eeuu} width="20" height="20"/></td>
                <td>USD</td>
                <td>{listado.CAD}</td>
              </tr>
              <tr>
                <td><img src={eur} width="20" height="20"/></td>
                <td>EUR</td>
                <td>{listado.CAD}</td>
              </tr>
        </tbody>
      </table>
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, SelectApi, actualizarState];
};

export default useApi;
//{listado.map(lista => (
//  <li><span>{lista.CAD}, {lista.rates.CAD}</span></li>
//<li>{lista.GBP}, {lista.rates.GBP}</li>
//<li>{lista.USD}, {lista.rates.USD}</li>
//<li>{lista.EUR}, {lista.rates.EUR}</li>
//))}

//<li>{CAD}, {rates.CAD}</li>
//<li>{GBP}, {rates.GBP}</li>
//<li>{USD}, {rates.USD}</li>
//<li>{EUR}, {rates.EUR}</li>