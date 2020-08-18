import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
//import { v4 as uuidv4 } from 'uuid';

const Label = styled.label`
font-size: 1.3rem;
margin-top: 2rem;
margin-bottom: 1rem;
display: block;
`;

const Select = styled.select`
width: 100%;
display: block;
padding: 1rem;
-webkit-appearance: none;
border: none;

`;
const useMoneda = (label, stateInicial, opcionesMonedas) => {

    //console.log(opcionesMonedas);
    
    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);


    const Seleccionar = () => (// lo que esta en seleccionar es lo que s emuestra en pantalla 
        <Fragment>
            <Label>{label}</Label>
            <Select
            //  FUNCION PARA VER LO QUE EL USUario seleciona o escribe
                onChange={ e => actualizarState(e.target.value)} 
                value={state}
            >
                <option value="">Moneda</option> 
                {Object.keys(opcionesMonedas).map(opcion => (
                    <option key={opcion.toString()} value={opcion}>{opcion}</option>
                ))}
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

 
export default useMoneda;