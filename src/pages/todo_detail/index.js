import React, { useState, useEffect } from 'react'
import { fetch, api } from '../../constants'

function TodoDetail(props) {
  const { todoId } = props.match.params

  const [{ loading, todo }, setState] = useState({ loading: true, todo: {} })

  useEffect(() => {
    async function fetchTodos() {
      const todo = await fetch(`${api.todos}/${todoId}`)
      setState({
        loading: false,
        todo
      })
    }
    fetchTodos()
  }, [todoId])

  if (loading) {
    return 'Loading...'
  }

  return (
    <div>
      <p><span className='text-gray-700 w-24 inline-block' >Title: </span>{todo.title}</p>
      <p><span className='text-gray-700 w-24 inline-block' >ID: </span>{todo.id}</p>
      <p><span className='text-gray-700 w-24 inline-block' >UserID: </span>{todo.userId}</p>
      <p><span className='text-gray-700 w-24 inline-block' >Completed: </span>{todo.completed ? <span role='img' aria-label='check' className='text-lg' >&#9989;</span> : <span role='img' aria-label='uncheck' >&#10060;</span>}</p>
    </div>
  )
}

export default TodoDetail