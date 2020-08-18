import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
background-color: #f1f0f0;
padding:10px;
`;

const TextoHeader = styled.h1`
font-size: 2rem;
margin:0;
text-align: center;
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