import React from 'react'

function Todo({todo, handleToggle}) {
    return (
        <div onClick={() =>handleToggle(todo.id)} className={todo.complete ? "strike" : ''}>
            {todo.task}
        </div>
    )
}

export default Todo
