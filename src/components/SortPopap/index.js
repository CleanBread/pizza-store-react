import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames'

import { setSortBy as setSortByAction } from '../../redux/actions/filters';

import './SortPopap.scss';

const SortPopap = (props) => {
    const dispatch = useDispatch()

    const [isVisiblePopap, setIsVisiblePopap] = useState(false);
    const [currentCat, setCurrentCat] = useState(0);

    const sortCats = [
        {
            name: 'популярности',
            type: 'popular'
        },
        {
            name: 'цене',
            type: 'price'
        }
    ]

    const activeCatText = sortCats[currentCat].name;

    const sortBlockRef = useRef()

    const toggleVisiblePopap = () => {
        setIsVisiblePopap(!isVisiblePopap)
    }

    const outsideClick = (e) => {
        if (!e.path.includes(sortBlockRef.current)) {
            setIsVisiblePopap(false)
        }
    }

    const changeCurrentCat = (cat) => {
        setCurrentCat(cat)
        setIsVisiblePopap(false)

        dispatch(setSortByAction(sortCats[cat].type))
    }

    useEffect(() => {
        document.body.addEventListener('click', outsideClick)
        return () => {
            document.body.removeEventListener('click', outsideClick)
        };
    }, []);

    return (
        <div ref={sortBlockRef} className="sort" className={
            classNames(
                'sort',
                {
                    'active': isVisiblePopap
                }
            )}>
            <div className="sort__label" onClick={toggleVisiblePopap}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span>{activeCatText}</span>
            </div>
            <div className="sort__popup">
                <ul>
                    {
                        sortCats.map((item, index) => {
                            return <li className={currentCat === index ? 'active' : ''} key={index} onClick={() => { changeCurrentCat(index) }}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default SortPopap;