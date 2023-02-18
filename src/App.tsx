import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Settings from './Components/Settings/Settings';
import Counter from './Components/Counter/Counter';

function App() {
    const [count, setCount] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [startError, setStartError] = useState(false);
    const [maxError, setMaxError] = useState(false);
    const [isSet, setIsSet] = useState(false);



    return (
        <div className={'App'}>
            <Routes>
                <Route path={"/"} element={<Counter
                    count={count}
                    setCount={setCount}
                    startError={startError}
                    setStartError={setStartError}
                    maxValue={maxValue}
                    startValue={startValue}
                    isSet={isSet}
                    maxError={maxError}
                />}/>
                <Route path={"/settings"} element={<Settings
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    setStartError={setStartError}
                    setCount={setCount}
                    count={count}
                    setIsSet={setIsSet}
                    startError={startError}
                    maxError={maxError}
                    setMaxError={setMaxError}
                />}/>

            </Routes>
        </div>
)
    ;
}

export default App;