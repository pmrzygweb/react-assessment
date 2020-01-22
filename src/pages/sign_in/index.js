import React, { useContext, useState, useCallback } from 'react'
import { routes } from '../../constants'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../contexts/user'

function SignIn() {

  const [username, setUsrname] = useState('')
  const { dispatch } = useContext(UserContext)


  function onSubmit(e) {
    e.preventDefault()
    dispatch({ type: 'CHANGE_USERNAME', payload: username })
    localStorage.setItem('username', username)
  }

  const onChangeUsername = useCallback((evt) => {
    const { value } = evt.target
    setUsrname(value)
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <div className='flex items-center'>
        <label className='mr-4 block' >Username: </label>
        <input name='username' onChange={onChangeUsername} className='w-1/2 h-8 px-4 text-sm border border-gray-500 rounded focus:outline-none focus:border-blue-500' />
      </div>
    </form>
  )
}

function SignInLink() {

  const { state: { username } } = useContext(UserContext)

  if (username) {
    return null
  }

  return (
    <li><NavLink to={routes.SIGN_IN} activeClassName='text-blue-500' exact >SignIn</NavLink></li>
  )
}

function UsernameInfo() {
  const { state: { username }, dispatch } = useContext(UserContext)
  const onSignOut = useCallback(() => {
    localStorage.setItem('username', '')
    dispatch({ type: 'CLEAR' })
  }, [dispatch])

  if (!username) {
    return null
  }

  return (
    <div>
      <span className='text-gray-700' > {username}</span> <br />
      <span role='button' className='text-indigo-500 hover:text-indigo-300' onClick={onSignOut} >Sign out</span>
    </div>
  )
}

export { SignIn as default, SignInLink, UsernameInfo }