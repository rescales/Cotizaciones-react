import React, { Fragment, useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import canada from '../img/canada.png';
import GBP from '../img/united-kingdom.png';
import eeuu from '../img/usd.png';
import eur from '../img/eur.png';


const useApi = (listado) => {
  //console.log(listado);
  // State de nuestro custom hook
  const [state, actualizarState] = useState();


  const SelectApi = () => (
    // lo que esta en seleccionar es lo que s emuestra en pantalla
    <Fragment>
<table class="table">
        
        <tbody>
              <tr>
                <td><img src={canada} alt="bandera" width="20" height="20"/></td>
                <td className="moneda">CAD</td>
                <td className="numero col-sm-3">{listado.CAD}</td>
              </tr>
              <tr>
                <td><img src={GBP} alt="bandera" width="20" height="20"/></td>
                <td className="moneda">GBP</td>
                <td className="numero col-sm-3">{listado.GBP}</td>
              </tr>
              <tr>
                <td><img src={eeuu} alt="bandera" width="20" height="20"/></td>
                <td className="moneda">USD</td>
                <td className="numero col-sm-3">{listado.USD}</td>
              </tr>
              <tr >
                <td><img src={eur} alt="bandera" width="20" height="20"/></td>
                <td className="moneda">EUR</td>
                <td className="numero col-sm-3">{listado.EUR}</td>
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
