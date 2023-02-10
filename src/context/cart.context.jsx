import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (itemData, amount) => {
    if (amount === 0) return;
    itemData.amount = amount;

    setCart([...cart, itemData]);
    console.log(cart);
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
