import React, {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import SuperButton from "../SuperButton/SuperButton";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useNavigate} from "react-router-dom";


type SettingsPropsType={
    startValue:number
    maxValue:number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    setStartError:Dispatch<SetStateAction<boolean>>
    setCount:Dispatch<SetStateAction<number>>
    count: number
    setIsSet:Dispatch<SetStateAction<boolean>>
    startError:boolean
    setMaxError:Dispatch<SetStateAction<boolean>>
    maxError:boolean

}

const Settings:FC<SettingsPropsType> = (props) => {
    const [isEdited, setIsEdited] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const savedStartValue = localStorage.getItem('startValue');
        const savedMaxValue = localStorage.getItem('maxValue');
        if (savedStartValue && savedMaxValue) {
            props.setStartValue(parseInt(savedStartValue));
            props.setMaxValue(parseInt(savedMaxValue));
        }
    }, []);


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const startValue = parseInt(e.currentTarget.value);
        if (!props.startError) {
            props.setStartValue(startValue);
        }
        if (startValue < 0) {
            props.setStartError(true);
        } else if (startValue >= props.maxValue) {
            props.setStartError(true);
        } else {
            props.setStartError(false);
            setIsEdited(true);
        }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
       const value = parseInt(e.currentTarget.value);
        if (!props.maxError){
            props.setMaxValue(value);
        }
        if (value < 0) {
            props.setMaxError(true);
        } else if (value <= props.startValue) {
            props.setMaxError(true);
        } else {
            props.setMaxError(false);
            setIsEdited(true);
        }
    };



    const onSetClickHandler = () => {
        props.setCount(props.startValue)
        localStorage.setItem('startValue', props.startValue.toString());
        localStorage.setItem('maxValue', props.maxValue.toString());
        props.setIsSet(true)
        setIsEdited(false);
        navigate('/')

    }


    const startValueInputClass =  props.startError ? 'inputStartValue-error' : 'inputStartValue';
    const maxValueInputClass =  props.maxError ? 'inputStartValue-error' : 'inputStartValue';
    const disabledSet = (props.maxError || props.startError)

    return (
        <div className={"Settings"}>
            <div className={"Settings-display"}>
                <div className={'Settings-title' }>
                    <h1>max value:</h1>
                    <input  className={maxValueInputClass} type="number" value={props.maxValue} onChange={onChangeMaxValue}/>
                </div>
                <div className={'Settings-title'}>
                    <h1>start value:</h1>
                    <input className={startValueInputClass} type="number" value={props.startValue} onChange={onChangeStartValue}/>
                </div>
            </div>
            <div className={"Settings-btns"}>
                <div className={"buttons"}>
                    <SuperButton title={"set"} disabled={disabledSet} onClick={onSetClickHandler}/>
                </div>
            </div>
        </div>
    );
}

export default Settings;