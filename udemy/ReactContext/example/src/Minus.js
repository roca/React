import React,  { useContext }  from 'react';

import { CtxMinusNum } from './App';

function Minus() {
    const contextFunc = useContext(CtxMinusNum);

    return <>
        <button onClick={ () => {
            contextFunc();
        } }> - </button>
    </>
}

export default Minus;