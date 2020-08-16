import * as React from 'react';
import style from './simple-button.module.scss';
import classNames from 'classnames';

export const SimpleButton = (props) => {
    return (
        <button
            ref={props.innerRef}
            style={props.style}
            onClick={props.onClick ? props.onClick : () => null}
            disabled={props.disabled}
            className={classNames(
                style.Button,
                {[style.big]: props.isBig},
                {[style.rounded]: props.rounded}
            )}
        >
            {props.label}
        </button>
    );
};
