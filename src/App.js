import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import data from './data.json';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = id => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task }
    });
    setToDoList(mapped);
  }
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
        return !task.complete;
    })
    setToDoList(filtered);
}
  return (
    <div className="todo-app">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;
