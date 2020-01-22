import React, { useEffect, useContext } from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom'
import { history, routes } from './constants';
import Home from './pages/home'
import SignIn, { SignInLink, UsernameInfo } from './pages/sign_in'
import Page404 from './pages/404'
import Todos from './pages/todo'
import TodoDetail from './pages/todo_detail'
import './tailwind.css';
import { UserContext, withUserProvider } from './contexts/user';

function App() {

  const { dispatch } = useContext(UserContext)

  useEffect(() => {
    const username = localStorage.getItem('username')
    if (username) {
      dispatch({ type: 'CHANGE_USERNAME', payload: username })
    }
  }, [dispatch])

  return (
    <div className="App" >
      <header className="App-header">
        <Router history={history}>
          <div className='px-10 py-4 flex justify-between' >
            <div>
              <li><NavLink to={routes.HOME} activeClassName='text-blue-500' exact >Home</NavLink></li>
              <SignInLink />
              <li><NavLink to={routes.TODOS} activeClassName='text-blue-500' exact >Todos</NavLink></li>
            </div>
            <div>
              <UsernameInfo />
            </div>
          </div>
          <div className='max-w-2xl mx-auto border border-grey-900 rounded p-6' >
            <Switch>
              <Route exact path={routes.HOME} component={Home} />
              <Route exact path={routes.SIGN_IN} component={SignIn} />
              <Route exact path={routes.TODOS} component={Todos} />
              <Route exact path={routes.TODOS_DETAIL} component={TodoDetail} />
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </header>
    </div >
  );
}

export default withUserProvider(App);
