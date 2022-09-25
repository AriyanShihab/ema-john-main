import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, ratingsCount } = props.product;
  const { handelAddToCart } = props;
  console.log(props.handelAddToCart);
  return (
    <div>
      <div className="p-3 bg-gray-600 border border-gray-50 border-opacity-30 rounded h-[510px] relative">
        <img className="max-w-full shadow rounded" src={img} alt="product" />
        <h2 className="font-bold text-gray-900 text-2xl my-3 capitalize">
          {name.toLowerCase()}
        </h2>
        <h4 className="font-bold text-yellow-400 font-[20px]">
          Price: ${price}
        </h4>
        <div className="flex justify-between px-2 bg-gray-800 rounded py-2 mb-4 text-white">
          <span>{seller}</span>
          <span>{ratingsCount}</span>
        </div>
        <button
          onClick={() => handelAddToCart(props.product)}
          className="px-4 py-3 rounded bg-yellow-400 text-gray-900 font-bold w-full absolute bottom-0 left-0"
        >
          Add To cart {<FontAwesomeIcon icon={faCartShopping} />}
        </button>
      </div>
    </div>
  );
};

export default Product;
