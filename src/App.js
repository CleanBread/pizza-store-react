import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Basket } from './pages';

const App = () => {

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