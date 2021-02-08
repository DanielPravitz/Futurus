import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    animation: flicker linear infinite 2s;
    width:100%;
    padding: 10px 10px;
    font-family:${({ theme }) => theme.font};
    color: #FFFFFF;
    border: none;
    font-size: 15px;
    border-radius: 5px;
    margin-top:20px;
    background-color:  ${({ theme }) => theme.colors.primary};
    
    &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 10px #03e9f4,
                0 0 15px #03e9f4,
                0 0 20px #03e9f4;
    }

    &:disabled{
        opacity:0.5;
    }
`;

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
};


export default Button;
