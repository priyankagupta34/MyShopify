import Axios from "axios";

const url = "https://dummyjson.com/products";

export const ProductServices = {
  fetchAllProducts,
  fetchAllAddress
};

async function fetchAllProducts() {
  const allProds = await Axios.get(url);
  return allProds;
}

async function fetchAllAddress() {
  const address = await Axios.get("/jsons/address.json");
  return address;
}
