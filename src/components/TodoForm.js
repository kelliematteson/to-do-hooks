import React, { useState } from 'react'

function TodoForm({addTask}) {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
  
    }
    return (
        <form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="add a task..."
                    value={userInput}
                    onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
    )
}

export default TodoForm
