import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetch, api } from '../../constants'

function Todos() {

  const [{ loading, todos }, setState] = useState({ loading: true, todos: [] })

  useEffect(() => {
    async function fetchTodos() {
      const todos = await fetch(api.todos)
      setState({
        loading: false,
        todos
      })
    }
    fetchTodos()
  }, [])

  if (loading) {
    return 'Loading...'
  }

  return (
    todos.map((todo) => (
      <div className='flex border border-grey-700 p-4 rounded mb-8' key={todo.id} >
        <div className='flex justify-between w-full'>
          <div>
            <Link to={`/todos/${todo.id}`} ><p className='hover:text-blue-500 cursor-pointer text-gray-800' >{todo.title}</p></Link>
            <p className='text-xs' >
              <span className='text-gray-400' >userId: </span> <span className='text-gray-600'>{todo.userId}</span>
            </p>
          </div>
          <div>{todo.completed ? <span role='img' aria-label='check' className='text-lg' >&#9989;</span> : <span role='img' aria-label='uncheck' >&#10060;</span>}</div>
        </div>
      </div>
    ))
  )
}

export default Todos