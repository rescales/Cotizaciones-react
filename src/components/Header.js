import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
background-color: #ffffff;
padding:10px;
`;

const TextoHeader = styled.h1`
font-size: 2,5rem;
margin:0;
text-align: left;
`;
const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
Header.prototype = {
    titulo: PropTypes.string.isRequired
} 

export default Header
;