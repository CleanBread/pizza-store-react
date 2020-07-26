import React from 'react';

import { Category, SortPopap, PizzaBlock } from '../components';

const Home = ({ pizzas }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Category category={[
                    'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
                ]}></Category>
                <SortPopap></SortPopap>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas &&
                    pizzas.map((item, index) => <PizzaBlock key={item.id} {...item}></PizzaBlock>)
                }
            </div>
        </div>
    );
}

export default Home;
