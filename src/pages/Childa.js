import React from 'react'
import Childb from './Childb'
export default function Childa({alert}) {
    const data="my name is this how are u"
    return (
        <div>
            this is child A
            <button onClick={()=>alert(data)}>data from child to parent</button>
            <Childb />
        </div>
    )
}
