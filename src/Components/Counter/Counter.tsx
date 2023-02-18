import React, {Dispatch, FC, SetStateAction} from 'react';
import Display from "../Display/Display";
import SuperButton from "../SuperButton/SuperButton";
import {useNavigate} from "react-router-dom";

type CounterPropsType={
    count: number
    setCount:Dispatch<SetStateAction<number>>
    setStartError: Dispatch<SetStateAction<boolean>>
    startError:boolean
    maxValue: number
    startValue:number
    isSet:boolean
    maxError:boolean
}



const Counter:FC<CounterPropsType> = (props) => {
    const navigate = useNavigate()

    const onClickHandlerIncrement = () => {
        for (let i = props.count; i < props.maxValue ; i++) {
            props.setCount(props.count + 1)
        }

    }
    const onClickHandlerReset = () => {
        props.setCount(props.startValue)

    }



    const disabledInc = props.maxValue === props.count || (props.maxError || props.startError) ? true : (props.isSet ? false : true)
    const disabledRes = (props.maxError || props.startError) ? true : (props.isSet ? false : true)
    const displayClass = props.count === props.maxValue ? 'Counter-display-red' : 'Counter-Display-Value'

    return (
        <div className={'Counter'}>
            <div className={'Counter-display'}>
                {(props.maxError || props.startError) ? <h1 className={"Error"}> Incorrect value!</h1> :
                    (props.isSet ? <Display count={props.count} className={displayClass}/> : <h1 className={'Counter-display-prompt'}>enter values and press "set"</h1>)}
            </div>
            <div className={"Counter-btns"}>
                <SuperButton title={'inc'} disabled={disabledInc} onClick={onClickHandlerIncrement}/>
                <SuperButton title={"res"} disabled={disabledRes} onClick={onClickHandlerReset}/>
                <SuperButton title={"set"} disabled={false} onClick={()=>navigate('/settings')}/>
            </div>
        </div>
    );
};

export default Counter;