import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (itemData) => {
    console.log(itemData);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
