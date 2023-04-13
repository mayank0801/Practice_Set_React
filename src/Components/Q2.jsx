import { useEffect, useState } from "react";
import { fakeFetchQ2 } from "../api/fakeFetchQ2";

export default function Q2() {
  const [productsInfo, setProducts] = useState([]);
  const [dataToShow, setDatatoShow] = useState([]);
  const getProducts = async () => {
    try {
      const {
        status,
        data: { products }
      } = await fakeFetchQ2("https://example.com/api/products");
      setProducts(products);
      setDatatoShow(products);
    } catch (e) {
      console.log(e);
    }
  };

  function filterhandler() {
    setDatatoShow(productsInfo.filter(({ quantity }) => quantity > 20));
    // setProducts()
  }
  function filterhandlerPrice() {
    setDatatoShow(productsInfo.filter(({ price }) => price > 100));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <button onClick={() => filterhandler()}>
        Show Products With Quantity more than 20
      </button>
      <button onClick={() => filterhandlerPrice()}>Filter By Price</button>
      <ul>
        {dataToShow.map(({ name, price, quantity }) => (
          <li>
            {name}-Rs{price}-Quantity:{quantity};
          </li>
        ))}
      </ul>
    </>
  );
}
// Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.
