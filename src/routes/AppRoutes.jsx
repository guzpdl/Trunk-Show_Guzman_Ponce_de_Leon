import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetails from "../pages/ItemDetails";
import Products from "../pages/Products";
// import getProducts from "../service/axios.service";
import { getProductsFirebase } from "../service/firebase.service";

const AppRoutes = () => {
  const [products, setProducts] = useState([]);

  const firebaseData = () => {
    getProductsFirebase()
      .then((prodInfo) => {
        setProducts(prodInfo);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    firebaseData();
  }, []);

  const bags = products.filter((product) => product.category === "bags");
  const totes = products.filter((product) => product.category === "totes");

  return (
    <Routes>
      <Route path="/" element={<Home bags={bags} totes={totes} />} />
      <Route
        path="/:category"
        element={<Products products={products} bags={bags} totes={totes} />}
      />
      <Route path="/:category/:itemId" element={<ItemDetails />} />
    </Routes>
  );
};

export default AppRoutes;
