import React from 'react';
import styled from 'styled-components';

const List = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};;
    font-family: sans-serif;
    font-size: 18px;
    padding:20px;
    border-radius: 10px;
    max-width:400px;
    width: 80vw;
    li{
        line-height: 36px;
    }
`;

const TodoList = () => (
    <List>
        <li>Fazer Café</li>
        <li>Fazer a lição de inglês</li>
        <li>Estudar ReactJS</li>
    </List>   
)

export default TodoList ;
