import { NavLink } from "react-router-dom";
import invoisedata from "../pages/Invoisedata";

export default function Invoices() {
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoisedata.map((invoice) => (
          <NavLink
            style={({isActive})=>{
                return{
                     display: "block", margin: "1rem 0" ,
                     color:isActive?'red':''
                }
                }}
           
                
            to={`invoices${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
