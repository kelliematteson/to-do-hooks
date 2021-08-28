import React from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';

const EachTask = styled.div`
    display: flex;
    justify-content: start;
    border: none;
    margin: 2px;
    padding: 2px;
    background-color: white;
    color: black;
`;

function Todo({todo, handleToggle}) {
    return (
        <EachTask onClick={() =>handleToggle(todo.id)} className={todo.complete ? 'strike' : ''}>
            {todo.task}
            <BsTrash />
            {todo.complete ? <FaCheck style={{color: 'red'}} /> : ''}
        </EachTask>
    )
}

export default Todo
