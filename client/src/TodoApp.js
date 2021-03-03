import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import Container from './components/Container'

export default function TodoApp() {
  const [todo, setTodo] = useState({ name: '', completed: false })
  const [todos, setTodos] = useState([
    { id: 1, name: "Go grocery shopping", completed: false },
    { id: 2, name: "Buy snacks", completed: true }
  ])

  function handleTodo(event){
    setTodo({...todo, name: event.target.value})
  }

  function handleDelete(id) {
    console.log('delete')

  }

  function handleSubmit(event){
    event.preventDefault()
    setTodos([...todos, todo])
    setTodo({ name: '', completed: false })
  }

  function handleEdit(id){
    console.log('edit me', id)
    /*

    */
  }
//https://www.robinwieruch.de/react-update-item-in-list
  function toggleStatus(id){
    const updatedTodos = todos.map(todo =>{
      if (todo.id === id) {
        return {...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="container">
      <Header />
      <TodoForm handleTodo={handleTodo} handleSubmit={handleSubmit} todo={todo}/>
      <Container todos={todos} toggleStatus={toggleStatus} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
}


