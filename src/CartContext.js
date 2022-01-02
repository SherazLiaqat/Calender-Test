import React from "react";

const defaultValue = { items: [], totalPrice: 0 }

const CartContext = React.createContext(defaultValue);
export {CartContext, defaultValue};