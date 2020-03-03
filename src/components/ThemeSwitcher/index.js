import React from  'react';
import styled from 'styled-components';

const Buttonts = styled.button`
    margin: 20px 10px;
    width: 100px;
    height: 40px;
    cursor: pointer;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    text-transform: uppercase;
    font-weight: bold;
`;

const ThemeSwitcher = ({toggleTheme}) => {
    return <Buttonts onClick={()=>{ toggleTheme() }}>Alterar tema</Buttonts>
}

export default ThemeSwitcher;