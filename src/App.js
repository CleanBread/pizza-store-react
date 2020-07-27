import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Header } from './components';
import { Home, Basket } from './pages';

import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

const App = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setPizzasAction(data.pizzas))
      })
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/basket" component={Basket}></Route>
        </div>
      </div>
    </div>
  )
}

export default App;