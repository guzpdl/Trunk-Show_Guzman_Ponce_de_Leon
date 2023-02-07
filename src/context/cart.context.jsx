import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
