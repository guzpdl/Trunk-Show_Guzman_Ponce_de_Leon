import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetails from "../pages/ItemDetails";
import Products from "../pages/Products";
import getProducts from "../service/axios.service";

const AppRoutes = () => {
  const [products, setProducts] = useState([]);

  const productData = () => {
    getProducts()
      .then((productsInfo) => {
        setProducts(productsInfo.products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    productData();
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
      <Route
        path="/:category/:itemId"
        element={<ItemDetails products={products} />}
      />
    </Routes>
  );
};

export default AppRoutes;
