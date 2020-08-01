const initialState = {
    items: {},
    countsItems: {},
    totalPrice: 0,
    totalCount: 0
}

const basket = (state = initialState, action) => {
    const id = action.payload && action.payload.pizza ? `${action.payload.pizza.id}${action.payload.pizza.size}${action.payload.pizza.type.id}` : ''
    switch (action.type) {
        case 'ADD_PIZZA':

            const newItems = {
                ...state.items,
                [id]: {
                    pizza: action.payload.pizza,
                    count: state.items[id] ? ++state.items[id].count : 1
                }
            };

            const currentPizzaPrice = state.totalPrice + action.payload.pizza.price;
            const currentCount = ++state.totalCount

            const currentPizzasCount = state.countsItems[action.payload.pizza.id] ? ++state.countsItems[action.payload.pizza.id] : 1

            return {
                ...state,
                items: newItems,
                totalCount: currentCount,
                totalPrice: currentPizzaPrice,
                countsItems: {
                    ...state.countsItems,
                    [action.payload.pizza.id]: currentPizzasCount
                }
            };

        case 'DELETE_PIZZAS': {

            const newItems = { ...state.items }

            const newTotalPrice = state.totalPrice - state.items[id].count * state.items[id].pizza.price
            const newTotalCount = state.totalCount - state.items[id].count
            const currentPizzasCounts = { ...state.countsItems }
            delete currentPizzasCounts[action.payload.pizza.id]

            delete newItems[id]

            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newTotalCount,
                countsItems: currentPizzasCounts
            }
        }
        case 'DELETE_ONE_OF': {
            let newItems = {}

            if (state.items[id].count === 1) {

                newItems = { ...state.items }
                delete newItems[id]

            } else {
                newItems = {
                    ...state.items,
                    [id]: {
                        pizza: state.items[id].pizza,
                        count: --state.items[id].count
                    }
                }
            }
            const newTotalPrice = state.totalPrice - state.items[id].pizza.price
            const newTotalCount = --state.totalCount
            const currentPizzasCounts = {
                ...state.countsItems,
                [action.payload.pizza.id]: --state.countsItems[action.payload.pizza.id]
            }

            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newTotalCount,
                countsItems: currentPizzasCounts
            }
        }
        case 'ADD_ONE_MORE': {
            const newTotalPrice = state.totalPrice + state.items[id].pizza.price
            const newTotalCount = ++state.totalCount
            const currentPizzasCounts = {
                ...state.countsItems,
                [action.payload.pizza.id]: ++state.countsItems[action.payload.pizza.id]
            }

            const newItems = {
                ...state.items,
                [id]: {
                    pizza: state.items[id].pizza,
                    count: ++state.items[id].count
                }
            }
            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newTotalCount,
                countsItems: currentPizzasCounts
            }
        }
        case 'DELETE_ALL':
            return {
                ...state,
                items: {},
                countsItems: [],
                totalPrice: 0,
                totalCount: 0,
                countsItems: []
            }
        default:
            return state
    }
}

export default basket