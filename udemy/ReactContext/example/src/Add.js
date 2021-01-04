import React,  { useContext }  from 'react';

import { CtxPlusNum } from './App';

function Add() {

    const contextFunc = useContext(CtxPlusNum);

    return <>
        <button onClick={contextFunc}> + </button>
    </>
}

export default Add;