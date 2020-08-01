export const addPizza = (newPizzaObj) => ({
    type: 'ADD_PIZZA',
    payload: newPizzaObj
})

export const deleteAll = () => ({
    type: 'DELETE_ALL'
})

export const deletePizzas = (pizza) => ({
    type: 'DELETE_PIZZAS',
    payload: pizza
})

export const deleteOneOf = (pizza) => ({
    type: 'DELETE_ONE_OF',
    payload: pizza
})

export const addOneMore = (pizza) => ({
    type: 'ADD_ONE_MORE',
    payload: pizza
})