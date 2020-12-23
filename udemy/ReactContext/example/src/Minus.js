import React,  { useContext }  from 'react';

import { CtxNum } from './App';

function Minus() {
    const contextFunc = useContext(CtxNum);

    return <>
        <button onClick={ () => {
            contextFunc.minus();
        } }> - </button>
    </>
}

export default Minus;