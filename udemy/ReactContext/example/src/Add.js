import React,  { useContext }  from 'react';

import { CtxNum } from './App';

function Add() {

    const contextFunc = useContext(CtxNum);

    return <>
        <button onClick={contextFunc.plus}> + </button>
    </>
}

export default Add;