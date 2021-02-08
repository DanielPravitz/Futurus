import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width:100%;
    height:50px;
    padding: 15px 15px;
    border: solid 2px ${({ theme }) => theme.colors.primary}; 
    background: transparent;
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 15px;

    &:focus{
        box-shadow: 0 0 5px #03e9f4;
    }
`;

export default function Input({ onChange, placeholder }) {
    return (
        <div>
            <InputBase
                placeholder={placeholder}
                onChange={onChange} />
        </div>
    )
}

Input.defaultProps = {
    value: '',
};


Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};