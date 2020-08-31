import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import "moment/locale/nl";



const Label = styled.label`
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: block;
`;
const CustomDatePickDiv = styled.div`
  background-color: white;
  border: solid 0.1em #cbd4c9;
  border-radius: 0.25em;
  padding: 0.3em 1.6em 0 1.6em;
  
  width: 190px;
`;



const useFecha = (label) => {
  // State de nuestro custom hook
  //const [stateFecha, actualizarStateFecha] = useState(fecha);
  const [stateFecha, actualizarStateFecha] = useState(null);

 

  const SeleccionarFecha = () => (
    <Fragment>
      <Label>{label}</Label>     
      
      
       <DatePicker
        className="date select-css1 border-left-0"
        selected={stateFecha}
        onChange={(date) => actualizarStateFecha(date)}
        maxDate={addDays(new Date(), 0)}
        dateFormatCalendar="yyyy-MM-dd"
        disabledKeyboardNavigation
        placeholderText="DD / MM / YYYY  ">
        <i class='fa fa-calendar-o'></i>
      </DatePicker>
     
      
    
            
      
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [stateFecha, SeleccionarFecha, actualizarStateFecha];
};

export default useFecha;

//{(stateFecha > date1)
//?   <p>Debe elegir una fecha correcta</p>
//: null}
//<i class="far fa-calendar"></i>

//const CustomInput = React.forwardRef((props, ref) => {
  //return (
    //<CustomDatePickDiv>
      //<label onClick={props.onClick} ref={ref}>
       // {props.value || props.placeholder}
      //</label>
      //<FontAwesomeIcon icon={faCalendar} onClick={props.onClick} />
    //</CustomDatePickDiv>
  //);
//});

//customInput={<CustomInput />}


//background-image: url('https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png'),
    //linear-gradient(to bottom, #ffffff 0%,#ffffff 100%);