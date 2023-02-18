import React, {MouseEventHandler} from 'react';
import './SuperButton.css'


type SuperButtonPropsType={
    title: string
    onClick: MouseEventHandler<HTMLButtonElement>
    disabled: boolean

}



const SuperButton = (props: SuperButtonPropsType) => {
    return (
        <div className={"Universal-btn"}>
            <button onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
        </div>
    );
};

export default SuperButton;