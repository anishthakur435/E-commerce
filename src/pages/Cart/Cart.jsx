import React, { useContext } from "react";
import { Typography, Button, IconButton } from "@mui/material";
import { Add, Remove, DeleteOutlined } from "@mui/icons-material";
import { ProductContext } from "../../services/context/getProducts";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    deleteFromCart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    getSingleProduct,
  } = useContext(ProductContext);

  if (!cart || cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#f7f6f2] px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-none border-2 border-dashed border-[#d33a11]/40 bg-white p-10 text-center shadow-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
              My Cart
            </p>
            <Typography
              variant="h4"
              className="mb-5 font-black uppercase tracking-[0.08em] text-slate-900"
            >
              Your cart is empty.
            </Typography>

            <Typography
              component={Link}
              to="/shop"
              className="inline-block rounded-none border border-[#d33a11] px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d33a11] transition hover:bg-[#d33a11] hover:text-white"
            >
              Continue Shopping
            </Typography>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f6f2] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
            Bag
          </p>
          <Typography
            variant="h3"
            className="mt-3 font-black uppercase tracking-[0.08em] text-slate-900"
          >
            My Cart
          </Typography>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row lg:items-start">
          <div className="flex-1 rounded-none border border-[#eadfd5] bg-white p-3 shadow-sm sm:p-4">
            <div className="space-y-0">
              {cart.map((product) => {
                const productCount = cart.find(
                  (item) => item.id === product?.id,
                );
                const qty = productCount?.quantity || 1;
                const lineTotal = (product?.price * qty).toFixed(2);

                return (
                  <div
                    key={product?.id}
                    className="flex flex-col gap-4 sm:gap-5 border-b border-[#eadfd5] py-4 sm:py-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex w-full items-center gap-3 sm:gap-4 sm:w-5/12">
                      <div className="h-20 w-20 overflow-hidden bg-[#f5f1eb] flex-shrink-0 sm:h-28 sm:w-28">
                        <img
                          onClick={() => getSingleProduct(product)}
                          src={product?.images?.[0]}
                          alt={product?.title || "Product Image"}
                          className="h-full w-full object-cover cursor-pointer"
                        />
                      </div>

                      <div className="min-w-0">
                        <Typography
                          variant="body2"
                          component="div"
                          className="font-semibold text-slate-900 text-xs sm:text-sm md:text-base line-clamp-2"
                        >
                          {product?.title || "Unknown Product"}
                        </Typography>
                        <Typography
                          variant="caption"
                          className="mt-1 sm:mt-2 font-mono text-[#d33a11] text-xs sm:text-sm"
                        >
                          ${product?.price}
                        </Typography>
                      </div>
                    </div>

                    <div className="flex w-full items-center justify-center sm:w-3/12">
                      <div className="flex items-center border border-[#d33a11] bg-[#fffaf7]">
                        <button
                          onClick={() => decreaseQuantity(product?.id)}
                          disabled={qty === 1}
                          className="px-2 sm:px-3 py-1.5 sm:py-2 text-[#d33a11] transition hover:bg-[#d33a11] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <Remove fontSize="small" />
                        </button>
                        <span className="min-w-8 sm:min-w-10 text-center font-mono text-xs sm:text-sm font-bold text-slate-900">
                          {qty}
                        </span>
                        <button
                          disabled={qty === 15}
                          onClick={() => increaseQuantity(product?.id)}
                          className="px-2 sm:px-3 py-1.5 sm:py-2 text-[#d33a11] transition hover:bg-[#d33a11] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <Add fontSize="small" />
                        </button>
                      </div>
                    </div>

                    <div className="flex w-full items-center justify-between sm:w-2/12 sm:justify-end">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 sm:hidden">
                        Total
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900">
                        ${lineTotal}
                      </span>
                    </div>

                    <div className="w-full text-right sm:w-1/12 sm:text-right">
                      <IconButton
                        onClick={() => deleteFromCart(product?.id)}
                        size="small"
                        sx={{ color: "#d33a11", fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                        aria-label="delete"
                      >
                        <DeleteOutlined />
                      </IconButton>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="border border-[#eadfd5] bg-white p-4 sm:p-6 shadow-sm sticky top-20">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
                Summary
              </p>
              <Typography
                variant="h6"
                component="h2"
                className="mt-3 sm:mt-4 font-black uppercase text-sm sm:text-base text-slate-900"
              >
                Order Summary
              </Typography>

              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <div className="flex justify-between border-b border-[#eadfd5] pb-3 sm:pb-4 font-mono text-xs sm:text-sm text-slate-700">
                  <span>Subtotal</span>
                  <span>${cartTotal?.toFixed(2) || "0.00"}</span>
                </div>

                <div className="flex justify-between text-base sm:text-lg md:text-xl font-mono font-bold text-slate-900">
                  <span>Total</span>
                  <span>${cartTotal?.toFixed(2) || "0.00"}</span>
                </div>
              </div>

              <Button
                to="/checkout"
                component={Link}
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  bgcolor: "#d33a11",
                  color: "white",
                  borderRadius: 0,
                  py: { xs: 1, sm: 1.5 },
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 800,
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                  "&:hover": {
                    bgcolor: "#b62b12",
                  },
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
