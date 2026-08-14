import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "./ToastNotification";

export default function ButtonCard({ product, cart, addToCart }) {
  const isInCart = cart?.find((item) => item.id === product.id);
  const qty = isInCart?.quantity;

  const addProduct = () => {
    addToCart(product);
  };
  if (!isInCart) {
    return (
      <button
        onClick={() => addProduct()}
        className="w-full bg-[#cc3300] text-white px-4 py-3 font-bold hover:bg-[#aa2200] transition-colors"
      >
        Add To Cart
      </button>
    );
  }
  return (
    <>
      <Link
        to="/cart"
        className="w-full bg-[#020202] text-[#dee4e7] cursor-pointer  px-4 py-3 font-bold hover:bg-[#430f02] transition-colors flex justify-center items-center gap-2 text-center  "
      >
        View Cart
        <span className="bg-[#cc3300] text-white rounded-full px-2 py-0.5 text-xs">
          {qty}
        </span>
      </Link>
    </>
  );
}
