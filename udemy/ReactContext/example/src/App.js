import React, { createContext, useState } from "react";
import "./styles.css";

import Number from './Number';
import Minus from './Minus';
import Add from './Add';

const CtxNum = createContext();

export default function App() {

    const [number, setnumber] = useState(0)

    function minus() {
        setnumber(number <= 0 ? 0 : number - 1);
    }
    function plus() {
        setnumber(number + 1);
    }

    const values = { number, minus, plus };


    return (
        <div className="App">
            <CtxNum.Provider value={ values}>
                <Number />
                <Minus />
                <Add />
            </CtxNum.Provider>
        </div>
    )
}

export { CtxNum };