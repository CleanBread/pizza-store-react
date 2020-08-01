import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Category, SortPopap, PizzaBlock, PizzaLoadingBlock } from '../components';

import { fetchPizzas as fetchPizzasAction } from '../redux/actions/pizzas';

const Home = () => {

    const { pizzaItems, curCat, sortBy, isLoaded } = useSelector(({ pizzas, filters }) => {
        return {
            pizzaItems: pizzas.items,
            curCat: filters.category,
            sortBy: filters.sortBy,
            isLoaded: pizzas.isLoaded
        }
    })

    const dispatch = useDispatch()

    React.useEffect(() => {
        if (!pizzaItems.length) {
            dispatch(fetchPizzasAction())
        }
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Category></Category>
                <SortPopap></SortPopap>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ?
                    pizzaItems.filter(item => curCat === 'all' ? item : item.category === curCat)
                        .sort((prevItem, nextItem) => {
                            switch (sortBy) {
                                case 'popular':
                                    return prevItem;
                                case 'price':
                                    return prevItem.price - nextItem.price;
                            }
                        })
                        .map(item => <PizzaBlock key={item.id} {...item}></PizzaBlock>)
                    : new Array(10).fill(0).map((item, index) => <PizzaLoadingBlock key={index} />)
                }
            </div>
        </div>
    );
}

export default Home;
