import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);

  const addItemToCart = (itemData, amount) => {
    if (amount === 0) return;
    if (cart.some((element) => element.id === itemData.id)) {
      const newCart = [...cart];
      itemData.amount += amount;
      setCart([...newCart]);
    } else {
      itemData.amount = amount;
      setCart([...cart, itemData]);
    }
  };

  const removeItemFromCart = (itemId) => {
    let newCart = [...cart];

    // let newCartWithoutItem = newCart.filter((object) => object.id !== itemId);

    newCart.length = 0;

    console.log(newCart.length);
    setCart([newCart]);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
