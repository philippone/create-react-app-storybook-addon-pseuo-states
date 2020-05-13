import * as React from 'react';
import './simple-button.scss';
import classNames from 'classnames';

export const SimpleButton__withoutCssModules = (props) => {
    return (
        <button
            ref={props.innerRef}
            style={props.style}
            onClick={props.onClick ? props.onClick : () => null}
            disabled={props.disabled}
            className={classNames(
                "Button",
                {"big": props.isBig}
            )}
        >
            {props.label}
        </button>
    );
};
