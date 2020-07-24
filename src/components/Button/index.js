import React from 'react';

import classNames from 'classnames'

import './Button.scss';

const Button = (props) => {
    return (
        <button {...props} className={
            classNames('button', props.className, {
                'button-outline': props.outline
            })
        }>{props.children}</button>
    );
};

export default Button;