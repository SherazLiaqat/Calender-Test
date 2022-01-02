import React,{useContext} from 'react'
import Childc from './Childc'
import { mydata } from './Parent'
function Childb() {
    const {fname,lname} = useContext(mydata)
    return (
        <div>
            this is  child b
            <p>Here is my data</p>
            <h4>{fname}</h4>
            <h4>{lname}</h4>
            <hr/>
            <Childc />
        </div>
    )
}

export default Childb
