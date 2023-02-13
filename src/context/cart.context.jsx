import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (itemData, amount) => {
    Number(amount);
    if (amount === 0) return;
    if (cart.some((element) => element.id === itemData.id)) {
      let newCart = [...cart];
      itemData.amount += amount;
      setCart([...newCart]);
    } else {
      itemData.amount = amount;
      setCart([...cart, itemData]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
