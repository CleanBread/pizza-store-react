import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Category.scss';

import { setCategory as setCategoryAction } from '../../redux/actions/filters';

const Category = () => {
    const dispatch = useDispatch();

    const [currentCat, setCurrentCat] = useState('all');

    const selectCurrentCat = (cat) => {
        setCurrentCat(cat)

        dispatch(setCategoryAction(cat))
    }

    const category = [
        'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
    ]

    return (
        <div className="categories">
            <ul>
                <li className={currentCat === 'all' ? 'active' : ''} onClick={() => { selectCurrentCat('all') }}>Все</li>
                {category &&
                    category.map((item, index) => {
                        return <li className={currentCat == index ? 'active' : ''} onClick={() => { selectCurrentCat(index) }} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Category;