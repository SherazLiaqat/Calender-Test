import React from 'react'
import {Link } from 'react-router-dom';
function Navbar(props) {
    return (

        <nav  style={{backgroundColor:"blue",display:'flex',alignItems:'center',justifyContent:'space-between'}} >
            <h1>{props.title}</h1>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Reducer">Reducer</Link>
        <Link to="/Main">Contnt</Link>
        <Link to="/invoices">Invoise</Link>
        </nav>
        
    )
}
Navbar.defaultProps={
    title:"Default Heading"
  }
export default Navbar

