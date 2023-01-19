import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const doSomething = () => {
    console.log("context mssge");
  };

  return (
    <CartContext.Provider value={{ items, doSomething }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, useCartContext, CartProvider };
