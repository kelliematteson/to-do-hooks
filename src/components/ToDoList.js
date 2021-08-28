import React from 'react'
import styled from 'styled-components';
import ToDo from './ToDo';

const List = styled.div`
    display: flex;
    flex-direction: column;
`;


function ToDoList({toDoList, handleToggle, handleFilter}) {

    return (
        <List>
            {toDoList.map((todo) => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Remove Completed Tasks!</button>
        </List>
    )
}

export default ToDoList
