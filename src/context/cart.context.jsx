import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const productsLocalStorage = JSON.parse(localStorage.getItem("Cart") || "[]");

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(productsLocalStorage);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

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

    let newCartWithoutItem = newCart.filter((object) => object.id !== itemId);

    setCart(newCartWithoutItem);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
