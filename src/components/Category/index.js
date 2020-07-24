import React, { useState } from 'react';

const Category = ({ category }) => {
    const [currentCat, setCurrentCat] = useState('all');

    return (
        <div className="categories">
            <ul>
                <li className={currentCat === 'all' ? 'active' : ''} onClick={() => { setCurrentCat('all') }}>Все</li>
                {category &&
                    category.map((item, index) => {
                        return <li className={currentCat == index ? 'active' : ''} onClick={() => { setCurrentCat(index) }} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Category;