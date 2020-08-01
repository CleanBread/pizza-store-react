import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { addPizza as addPizzaAction } from '../../redux/actions/basket';

import './PizzaBlock.scss';

const PizzaBlock = ({ id, name, imageUrl, price, sizes, types }) => {
    const dispatch = useDispatch();

    const currentCount = useSelector(({ basket }) => {
        return basket.countsItems[id] || null
    })

    const [activeSize, setActiveSize] = React.useState(sizes[0]);
    const [activeType, setActiveType] = React.useState(types[0].id);
    const onSelectType = (type) => {
        setActiveType(type)
    }

    const onSelectSize = (size) => {
        setActiveSize(size)
    }

    const addPizza = () => {
        dispatch(addPizzaAction({
            pizza: {
                id,
                imageUrl,
                name,
                price,
                size: activeSize,
                type: types[activeType]
            }
        }))
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types &&
                        types.map(item => <li key={item.id} className={classNames({
                            'active': activeType === item.id
                        })} onClick={() => onSelectType(item.id)}>{item.name}</li>)
                    }
                </ul>
                <ul>
                    {sizes &&
                        sizes.map((item) => <li className={activeSize === item ? 'active' : ''} onClick={() => onSelectSize(item)} key={item}>{item} см.</li>)
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add" onClick={addPizza}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {currentCount &&
                        <i>{currentCount}</i>
                    }
                </div>
            </div>
        </div>
    );
};

PizzaBlock.propTypes = {
    name: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    sizes: propTypes.arrayOf(propTypes.number).isRequired,
    types: propTypes.arrayOf(propTypes.object)
}

PizzaBlock.defaultProps = {
    types: []
}

export default PizzaBlock;