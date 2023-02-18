import React from 'react';
import "./Display.css"


type DisplayPropsType ={
    count: number
    className: string
}


const Display = (props:DisplayPropsType) => {
    return ( <>
            <h3 className={props.className}>{props.count}</h3>
        </>


    );
};

export default Display;