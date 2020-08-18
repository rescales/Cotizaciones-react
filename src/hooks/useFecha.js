import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

import "moment/locale/nl";



const Label = styled.label`
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: block;
`;


const useFecha = (label) => {
  // State de nuestro custom hook
  //const [stateFecha, actualizarStateFecha] = useState(fecha);
  const [stateFecha, actualizarStateFecha] = useState(null);

  //const today = new Date();
  //const date1 =
    //today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const SeleccionarFecha = () => (
    <Fragment>
      <Label>{label}</Label>     
      
       <DatePicker
        className="date"
        selected={stateFecha}
        onChange={(date) => actualizarStateFecha(date)}
        maxDate={addDays(new Date(), 0)}
        dateFormatCalendar="yyyy-MM-dd"
        disabledKeyboardNavigation
        placeholderText="DD / MM / YYYY "
      />
            
      
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [stateFecha, SeleccionarFecha, actualizarStateFecha];
};

export default useFecha;

//{(stateFecha > date1)
//?   <p>Debe elegir una fecha correcta</p>
//: null}
