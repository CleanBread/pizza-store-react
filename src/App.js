import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { Header } from './components';
import { Home, Basket } from './pages';

import { setPizzas as setPizzasAction } from './redux/actions/pizzas';


// function App() {

//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then((resp) => {
//         setPizzas(resp.data.pizzas)
//       })
//   }, [])

//   return (
//   );
// }

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then((resp) => {
        this.props.setPizzas(resp.data.pizzas)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header></Header>
          <div className="content">
            <Route exact path="/" render={() => <Home pizzas={this.props.items} />}></Route>
            <Route exact path="/basket" component={Basket}></Route>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
