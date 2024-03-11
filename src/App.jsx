import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleComplet } from './app/todoSlice'

const App = () => {
  const [todo, setTodo] = useState('')

  // const [todos, setTodos] = useState([{ id: nanoid(), userTodo: 'Start learing Node js', isEdit: false, isComplete: true }])

  function handleTodo() {
    if (!todo) return
    dispatch(addTodo(todo))
    setTodo('')
  }
  // function handleCheck(id) {
  //   const updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       return { ...todo, isComplete: !todo.isComplete }
  //     }
  //     return todo;
  //   })
  //   setTodos(updatedTodos)
  // }
  // function handleUserInput(e) {
  //   setTodo(e.target.value)
  //   console.log(e.target);
  // }
  // function handleEnter(e) {
  //   if (e.key === 'Enter') {
  //     handleTodo()
  //   }
  // }
  // function handleDeleteTodo(id) {
  //   const removeTodo = todos.filter((todoItem, i) => todoItem.id !== id)
  //   setTodos(removeTodo)
  // }

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  return (
    <div className='bg-gray-800 text-white text-center w-full'>
      <div className='max-w-7xl h-screen mx-auto p-8'>
        <h3 className=' text-4xl py-4 font-bold'>My Todos</h3>

        {/* input field  */}
        <div>
          <div className='user-insert-todo-area text-2xl my-8'>
            <input type="text" placeholder='Enter your toods...' className='max-w-4xl w-96 mx-4 bg-black px-4 py-2 rounded-lg'
              value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className='bg-black px-4 py-2 rounded-lg hover:bg-gray-900' onClick={handleTodo}>Add Todo</button>
          </div>
          {/* user's todo's display  */}
          {todos.map((todoItem, i) => (
            <div key={todoItem.id} className='flex items-center justify-between text-white bg-green-500 py-4 px-8 text-2xl rounded-xl font-semibold lg:max-w-[50vw] mx-auto my-4'>
              <input type="checkbox" onChange={() => dispatch(toggleComplet(todoItem.id))} checked={todoItem.isComplete} />
              <div style={{ textDecoration: todoItem.isComplete ? "line-through" : "", color: 'blue' }}>
                {todoItem.userTodo}
              </div>
              <div className='flex gap-4'>
                <button className='bg-red-700 hover:bg-red-600 px-4 rounded-md py-2' onClick={() => { dispatch(deleteTodo(todoItem.id)) }}>Delete</button>
              </div>
            </div>
          )).reverse()}
        </div>
      </div>
    </div>
  )
}

export default App