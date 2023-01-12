import axios from "axios";

const BASE_URL = "http://localhost:8000";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export { getProducts };
