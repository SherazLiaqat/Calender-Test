import React from 'react'

export default function Footer({length}) {
    const today=new Date();
    return (
        <div style={{backgroundColor:"black",color:'#fff'}}>
            <p className="text-center p-2"> {length} List {length===1?'item':'items'} {today.getDate()},{today.getMonth()},{ today.getFullYear()}</p>
        </div>
    )
}
