import React, { useContext } from 'react';

import { CtxNum } from './App';

function Number() {
    const contextValue = useContext(CtxNum);

    return <h1>{ contextValue.number }</h1>
}

export default Number;