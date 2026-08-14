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
      <main className="min-h-screen max-w-[1200px] mx-auto p-5 font-sans">
        <div className="flex flex-wrap gap-10">
          <div className="flex-[1_1_500px]">
            <img
              src={product?.images?.[0]}
              alt={product?.title || "Product"}
              className="w-full h-auto object-cover bg-[#f5f5f5]"
            />
          </div>

          <div className="flex-[1_1_400px] flex flex-col gap-5">
            <div>
              <h1 className="text-[2.5rem] text-[#c23c27] m-0 mb-2.5 line-clamp-2">
                {product?.title}
              </h1>
              <p className="text-xl m-0">${product?.price}</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#c23c27]">Quantity *</label>
              <div className="flex items-center border border-gray-300 w-fit rounded">
                <button
                  onClick={handleQuantityDecrease}
                  disabled={quantity === 1}
                  className="bg-transparent border-none py-2.5 px-4 text-lg text-[#c23c27] cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>

                <button
                  onClick={handleQuantityIncrease}
                  className="bg-transparent border-none py-2.5 px-4 text-lg text-[#c23c27] cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 mt-2.5">
              <button
                onClick={handleAddToCart}
                className="p-4 border border-[#c23c27] bg-transparent text-[#c23c27] text-base font-semibold cursor-pointer hover:bg-[#fff5f4] transition-colors"
              >
                {cartItem ? "UPDATE CART" : "ADD TO CART"}
              </button>
              <button
                onClick={handleBuyNow}
                className="p-4 border-none bg-[#c23c27] text-white text-base font-semibold cursor-pointer hover:bg-[#a6301f] transition-colors"
              >
                Buy Now
              </button>
            </div>

            <div className="leading-[1.6] mt-2.5">
              <p className="text-gray-800">{product?.description}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ViewProduct;
