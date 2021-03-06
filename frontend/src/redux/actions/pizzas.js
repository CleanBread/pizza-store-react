import axios from 'axios';

export const fetchPizzas = () => dispatch => {

    axios.get('http://localhost:3232/pizzas')
        .then(({ data }) => {
            dispatch(setPizzas(data))
        })
        .catch(err => {
            axios.get('http://localhost:3000/db.json')
                .then(({ data }) => {
                    dispatch(setPizzas(data.pizzas))
                })
        })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})