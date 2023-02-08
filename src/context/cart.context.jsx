import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => {
  return useContext(CartContext);
};

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

export default CartProvider;
