import React from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';

const EachTask = styled.div`
    border: 2px solid white;
    border-radius: 15px;
    padding: 2px;
    background-color: #2787EA;
`;

function Todo({todo, handleToggle}) {
    return (
        <EachTask onClick={() =>handleToggle(todo.id)} className={todo.complete ? "strike" : ''}>
            {todo.task}
            <BsTrash />
        </EachTask>
    )
}

export default Todo
