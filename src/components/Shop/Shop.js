import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      ` https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handelAddToCart = (productDetails) => {
    // const newCart = [...cart, productDetails];
    setCart([...cart, productDetails]);
  };

  return (
    <div className=" grid w-4/5 mx-auto p-6 grid-cols-5 gap-4 ">
      <div className=" col-span-4 product-container bg-gray-700 grid grid-cols-3 gap-4 p-4 rounded-md ">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className=" col-span-1 cart-summery-container bg-yellow-200 rounded-md p-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
