import React, { createContext, useState } from "react";
import "./styles.css";

import Number from './Number';
import Minus from './Minus';
import Add from './Add';

const CtxNum = createContext();

const CtxPlusNum = createContext();

const CtxMinusNum = createContext();

export default function App() {

    const [number, setnumber] = useState(0)

    const [auth, setAuth]  = useState({ username: "bbalals"})

    function minus() {
        setnumber(number <= 0 ? 0 : number - 1);
    }
    function plus() {
        setnumber(number + 1);
    }

    const values = { number, minus, plus };


    return (
        <div className="App">
            <CtxNum.Provider value={ number }>
                <Number />
            </CtxNum.Provider>

            <CtxMinusNum.Provider value={ minus }>
                <Minus />
            </CtxMinusNum.Provider>

            <CtxPlusNum.Provider value={ plus} >
                <Add />
            </CtxPlusNum.Provider>
        </div>
    )
}

export { CtxNum, CtxMinusNum, CtxPlusNum };