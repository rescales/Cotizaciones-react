import React, { Fragment, useState } from "react";

//import { v4 as uuidv4 } from "uuid";



const useApiMasCoti = (listado) => {
  //console.log(listado);
  // State de nuestro custom hook
  const [state, actualizarState] = useState();
  const [paginaactual, guadarpaginaActual] = useState(1);

  const listadoAux = listado;

  const arrayItem = [];

  function generaNvoArray(objeto) {
    for (var i in objeto) {
      //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
      if (objeto.hasOwnProperty(i)) {
        var aux = `${i}`;
        var banderaOK;
        aux === "CAD" || aux === "GBP" || aux === "USD" || aux === "EUR"
          ? (banderaOK = false)
          : (banderaOK = true);
        if (banderaOK) {
          var itemLista = {
            moneda: `${i}`,
            coti: `${objeto[i]}`,
          };
          arrayItem.push(itemLista);
        }
      }
    }
  }

  generaNvoArray(listadoAux);

  //Calculo cantidad maxima de paginas
  var maxPag = Math.ceil(arrayItem.length / 4);

  //definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    console.log("paginaAnterior");
    if (nuevaPaginaActual === 0) return;
    guadarpaginaActual(nuevaPaginaActual);
  };

  //definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    console.log("paginaSiguiente");
    if (nuevaPaginaActual > maxPag) return;
    guadarpaginaActual(nuevaPaginaActual);
  };

  const SelectMasCoti = () => (
    // lo que esta en SelectMasCoti es lo que s emuestra en pantalla

    <Fragment>
      <table class="table">
        <thead></thead>
        <tbody>
          {arrayItem
            .slice(paginaactual * 4 - 4, paginaactual * 4)
            .map((item) => (
              <tr>
                <td>&#x1f3f4;&#xe0067;&#xe0062;&#xe0073;&#xe0063;&#xe0074;&#xe007f;</td>
                <td>{item.moneda}</td>
                <td>{item.coti}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="botones">
      {paginaactual === 1 ? null : (
        
        <button
          type="button"
          className="btn1 btn-outline-primary"
          onClick={paginaAnterior}
        >
          &laquo; {" "}
        </button>
      )}

      {paginaactual === maxPag ? null : (
        <button
          type="button"
          className="btn1 btn-outline-primary"
          onClick={paginaSiguiente}
        >
           &raquo;
        </button>
        
      )}
      </div>
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, SelectMasCoti, actualizarState];
};

export default useApiMasCoti;
