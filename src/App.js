import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components';
import { Home, Basket } from './pages';


function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then((resp) => {
        setPizzas(resp.data.pizzas)
      })
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <Route exact path="/" render={() => <Home pizzas={pizzas} />}></Route>
          <Route exact path="/basket" component={Basket}></Route>
        </div>
      </div>
    </div>
  );
}

export default App;
