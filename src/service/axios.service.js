import axios from "axios";

const getProducts = () => {
  return axios
    .get("/assets/products-data/products.json")
    .then((response) => response.data);
};

export default getProducts;
