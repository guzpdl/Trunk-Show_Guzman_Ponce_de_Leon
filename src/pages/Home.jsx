import React from "react";
import Banner from "../components/Banner";
import ItemListContainer from "../components/ItemListContainer";

const Home = ({ bags, totes }) => {
  return (
    <>
      <Banner />
      <ItemListContainer bags={bags} totes={totes} />
    </>
  );
};

export default Home;
