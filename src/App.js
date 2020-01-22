import React from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom'
import { history, routes } from './constants';
import Home from './pages/home'
import Page404 from './pages/404'
import Todos from './pages/todo'
import TodoDetail from './pages/todo_detail'
import './tailwind.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <Router history={history}>
          <div className='px-10 py-4' >
            <li><NavLink to='/' className='no-underline' activeClassName='text-green-500' exact >Home</NavLink></li>
            <li><NavLink to={routes.TODOS} activeClassName='text-green-500' exact >Todos</NavLink></li>
          </div>
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route exact path={routes.TODOS} component={Todos} />
            <Route exact path={routes.TODOS_DETAIL} component={TodoDetail} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </header>
    </div >
  );
}

export default App;
