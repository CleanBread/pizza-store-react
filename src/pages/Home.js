import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Category, SortPopap, PizzaBlock } from '../components';

const Home = () => {
    const { pizzaItems, curCat } = useSelector(({ pizzas, filters }) => {
        return {
            pizzaItems: pizzas.items,
            curCat: filters.category
        }
    })

    return (
        <div className="container">
            <div className="content__top">
                <Category></Category>
                <SortPopap></SortPopap>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzaItems &&
                    pizzaItems.filter(item => curCat === 'all' ? item : item.category === curCat)
                        .map(item => <PizzaBlock key={item.id} {...item}></PizzaBlock>)
                }
            </div>
        </div>
    );
}

export default Home;
