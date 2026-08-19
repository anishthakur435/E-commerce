import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../services/context/getProducts";
import { Navigate, useNavigate } from "react-router-dom";

function ViewProduct() {
  // context
  const { singleProduct, cart, addToCart, updateCartItemQuantity } =
    useContext(ProductContext);
  const navigate = useNavigate();

  // Find the item from cart if any
  const cartItem = cart.find((item) => item.id === singleProduct?.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  //Update the quantity of the item
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  // if there is no Product to show  redirect to  homepage
  if (!singleProduct || singleProduct.length === 0) {
    return <Navigate to="/" replace />;
  }

  const product = singleProduct;

  // onclick increase number
  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // onclick decrease number
  const handleQuantityDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // add item to cart if not already and update if alreday in cart
  const handleAddToCart = () => {
    if (cartItem) {
      updateCartItemQuantity(product.id, quantity);
    } else {
      addToCart(product, quantity);
    }
    navigate("/cart");
  };

  // redirect to checkout page to directly buy
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        buyNowItem: { ...product, quantity },
      },
    });
  };

  return (
    <>
      <main className="min-h-fit max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex items-start justify-center">
            <img
              src={product?.images?.[0]}
              alt={product?.title || "Product"}
              className="w-full h-auto object-cover bg-[#f5f5f5] max-w-md md:max-w-none"
            />
          </div>

          <div className="flex flex-col gap-5 justify-start">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#c23c27] m-0 mb-2.5 line-clamp-2 font-bold">
                {product?.title}
              </h1>
              <p className="text-lg sm:text-xl m-0">${product?.price}</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base text-[#c23c27] font-semibold">Quantity *</label>
              <div className="flex items-center border border-gray-300 w-fit rounded">
                <button
                  onClick={handleQuantityDecrease}
                  disabled={quantity === 1}
                  className="bg-transparent border-none py-2 px-3 sm:py-2.5 sm:px-4 text-lg text-[#c23c27] cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="px-3 sm:px-4 text-sm sm:text-base">{quantity}</span>

                <button
                  onClick={handleQuantityIncrease}
                  className="bg-transparent border-none py-2 px-3 sm:py-2.5 sm:px-4 text-lg text-[#c23c27] cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 mt-2.5">
              <button
                onClick={handleAddToCart}
                className="w-full p-3 sm:p-4 border border-[#c23c27] bg-transparent text-[#c23c27] text-sm sm:text-base font-semibold cursor-pointer hover:bg-[#fff5f4] transition-colors"
              >
                {cartItem ? "UPDATE CART" : "ADD TO CART"}
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full p-3 sm:p-4 border-none bg-[#c23c27] text-white text-sm sm:text-base font-semibold cursor-pointer hover:bg-[#a6301f] transition-colors"
              >
                Buy Now
              </button>
            </div>

            <div className="leading-[1.6] mt-4 sm:mt-2.5">
              <p className="text-sm sm:text-base text-gray-800">{product?.description}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ViewProduct;
