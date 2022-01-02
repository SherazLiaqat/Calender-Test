import React from 'react'
import './Square.css';
function Square({colorvalue,hexvalue}) {
    return (
        <div className='square' style={{backgroundColor:colorvalue}}>
            <h1>{colorvalue?colorvalue:'empty Value'}</h1>
            <p>{hexvalue?hexvalue:null}</p>
        </div>
    )
}
Square.defaultProps={
    colorvalue:'Empty color value'
}
export default Square

